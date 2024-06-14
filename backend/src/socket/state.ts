import { z } from "zod";
import prisma from "../lib/prisma";
import type { io as Io } from "../app";

const StateSchema = z.object({ song_id: z.number() });

async function updateState(args: unknown, user: number, cb: any) {
  const { success, data } = StateSchema.safeParse(args);

  if (!success) throw new Error("Not possible add like");

  const prev = await prisma.state.findUnique({ where: { user_id: user } });

  const current = await prisma.state.upsert({
    where: { user_id: user },
    update: { song_id: data.song_id },
    create: { user_id: user, song_id: data.song_id },
  });

  const userqueue = await prisma.play_queue.findMany({
    where: { user_id: user },
  });

  const currentIndex = userqueue.findIndex(
    (val) => val.song_id === current.song_id
  );

  cb({
    prev,
    current,
    next: currentIndex === -1 ? null : userqueue[currentIndex + 1] ?? null,
  });
}

async function stateHandlers(io: typeof Io, socket: any) {
  const userId = socket.request.user.id;
  socket.on(
    "client:state",
    async (args: unknown, cb: any) => await updateState(args, userId, cb)
  );
}

const stateSocket = { stateHandlers };

export default stateSocket;
