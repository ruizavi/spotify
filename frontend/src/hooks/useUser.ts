import { flushSync } from "react-dom";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { user } from "../lib/types";

interface State {
	user: Pick<user, "id" | "avatar" | "username" | "email"> | null;
	token: string | null;
	isAuth: boolean;
	jam: string | null;
}

interface Action {
	signin(
		user: Pick<user, "id" | "avatar" | "username" | "email">,
		token: string,
	): void;
	signout(): void;
	jamIn(id: string): void;
	jamOut(id: string): void;
}

const useUser = create<State & Action>()(
	persist(
		(set) => ({
			user: null,
			token: null,
			isAuth: false,
			jam: null,
			signin: (user, token) => set(() => ({ user, token, isAuth: true })),
			signout: () => set(() => ({ isAuth: false })),
			jamIn: (id) => set(() => ({ jam: id })),
			jamOut: () => set(() => ({ jam: null })),
		}),
		{ name: "user_state" },
	),
);

export default useUser;
