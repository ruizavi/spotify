import { z } from "zod";
import prisma from "../lib/prisma";
import * as jwt from "jsonwebtoken";
import config from "../config";
import schematas from "../lib/schema";

async function signup(data: unknown) {
	const { success, data: user } = schematas.SignupSchema.safeParse(data);

	if (!success) throw new Error("Data is not valid");

	const hashPassword = await Bun.password.hash(user.password);

	// biome-ignore lint/performance/noDelete: <explanation>
	delete user.confirm_password

	const result = await prisma.user.create({
		data: { ...user, password: hashPassword },
		select: {
			id: true,
			username: true,
			email: true,
			avatar: true,
		},
	});

	return result;
}

async function singin(data: unknown) {
	const { success, data: user } = schematas.SigninSchema.safeParse(data);

	if (!success) throw new Error("Data is not valid");

	const foundUser = await prisma.user.findFirst({
		where: { email: user.email },
		select: {
			id: true,
			avatar: true,
			username: true,
			email: true,
			password: true,
		},
	});

	if (!foundUser) throw new Error("User not found");

	const isVerifyPass = await Bun.password.verify(
		user.password,
		foundUser.password,
	);

	if (!isVerifyPass) throw new Error("Password not match");

	const token = jwt.sign({ id: foundUser.id }, config.JWT_SECRET, {
		expiresIn: "24h",
	});

	return {
		token,
		user: {
			id: foundUser.id,
			username: foundUser.username,
			avatar: foundUser.avatar,
			email: foundUser.email,
		},
	};
}

const authService = { signup, singin };

export default authService;
