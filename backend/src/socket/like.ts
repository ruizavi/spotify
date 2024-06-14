import { z } from "zod";
import type { io as Io } from "../app";
import prisma from "../lib/prisma";

const LikeSchema = z.object({
  entity_id: z.enum(["song", "artist", "album", "playlist"]),
  like_id: z.number(),
});

async function likeEntity(args: unknown, user: number, cb: any) {
  const { success, data } = LikeSchema.safeParse(args);

  if (!success) throw new Error("Not possible add like");

  const alreadyExists = await prisma.like_entity.findFirst({
    where: {
      entity: { name: data.entity_id },
      like_id: data.like_id,
      user_id: user,
    },
  });

  if (alreadyExists) {
    await prisma.like_entity.delete({
      where: {
        entity_id_like_id_user_id: {
          entity_id: alreadyExists.entity_id,
          like_id: alreadyExists.like_id,
          user_id: alreadyExists.user_id,
        },
      },
    });

    cb({ status: false });
  }

  const entity = await prisma.entity.findFirstOrThrow({
    where: { name: { contains: data.entity_id } },
  });

  await prisma.like_entity.create({
    data: {
      entity_id: entity?.id,
      like_id: data.like_id,
      user_id: user,
    },
  });

  cb({ status: true });
}

async function likeHandlers(io: typeof Io, socket: any) {
  const userID = socket.request.user.id;
  socket.on(
    "client:like",
    async (args: unknown, cb: any) => await likeEntity(args, userID, cb)
  );
}

const likeSocket = { likeHandlers };

export default likeSocket;
