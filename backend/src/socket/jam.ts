import { z } from "zod";
import type { io as Io } from "../app";
import prisma from "../lib/prisma";

const StateSchema = z.object({
  song_id: z.number(),
  play: z.boolean(),
  timestampt: z.number(),
});

async function updateState(args: unknown, jam: string, user: number, cb: any) {
  const existJam = await prisma.jam.findFirst({
    where: { jam_user: { some: { user_id: user } }, id: jam },
  });

  if (!existJam) return cb({ status: false });

  const { success, data } = StateSchema.safeParse(args);

  if (!success) return cb({ status: false });

  const updateState = await prisma.jam.update({
    where: { id: jam },
    data: data,
  });

  cb(updateState);

  return updateState;
}

async function add(song: number, jam: string, user: number, cb: any) {
  const existJam = await prisma.jam.findFirst({
    where: { jam_user: { some: { user_id: user } }, id: jam },
  });

  if (!existJam) return cb({ status: false });

  const queueAdded = await prisma.jam_play_queue.create({
    data: { jam_id: jam, song_id: song },
  });

  cb(queueAdded);
}
async function remove(song: number, jam: string, user: number, cb: any) {
  const existJam = await prisma.jam.findFirst({
    where: { jam_user: { some: { user_id: user } }, id: jam },
  });

  if (!existJam) return cb({ status: false });

  const queueAdded = await prisma.play_queue.delete({
    where: { user_id_song_id: { user_id: user, song_id: song } },
  });

  cb(queueAdded);
}
async function queue(user: number, jam: string) {
  const existJam = await prisma.jam.findFirst({
    where: { jam_user: { some: { user_id: user } }, id: jam },
  });

  if (!existJam) return { status: false };

  const queueList = await prisma.play_queue.findMany({
    where: { user_id: user },
  });

  return queueList;
}

async function jamHandlers(io: typeof Io, socket: any) {
  const userId = socket.request.user.id;
  const jam = socket.request.jam;

  const userInJam = await prisma.jam_user.findUnique({
    where: { jam_id_user_id: { jam_id: jam, user_id: userId } },
  });

  if (userInJam) socket.join(jam);

  // Pausa, reproducir,
  socket.on("client:jam:state", async (args: unknown, cb: any) => {
    const result = await updateState(args, jam, userId, cb);

    io.to(jam).emit("server:jam:state", result);
  });

  socket.on("client:jam:queue:add", async (args: number, cb: any) => {
    await add(args, jam, userId, cb);

    const result = await queue(userId, jam);

    io.to(jam).emit("server:jam:queue", result);
  });
  socket.on("client:jam:queue:remove", async (args: number, cb: any) => {
    await remove(args, jam, userId, cb);

    const result = await queue(userId, jam);

    io.to(jam).emit("server:jam:queue", result);
  });
}

const jamSocket = { jamHandlers };

export default jamSocket;
