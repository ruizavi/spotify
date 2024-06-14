import type { io as Io } from "../app";
import prisma from "../lib/prisma";

async function add(song: number, user: number, cb: any) {
  const queueAdded = await prisma.play_queue.create({
    data: { user_id: user, song_id: song },
  });

  cb(queueAdded);
}
async function remove(song: number, user: number, cb: any) {
  const queueAdded = await prisma.play_queue.delete({
    where: { user_id_song_id: { user_id: user, song_id: song } },
  });

  cb(queueAdded);
}
async function queue(user: number) {
  const queueList = await prisma.play_queue.findMany({
    where: { user_id: user },
  });

  return queueList;
}

async function queueHandlers(io: typeof Io, socket: any) {
  const userId = socket.request.user.id;

  socket.on("client:queue:add", async (arg: number, cb: any) => {
    await add(arg, userId, cb);
    socket.emit("server:queue", async () => await queue(userId));
  });
  socket.on("client:queue:remove", async (arg: number, cb: any) => {
    await remove(arg, userId, cb);
    socket.emit("server:queue", async () => await queue(userId));
  });
}

const queueSocket = { queueHandlers };

export default queueSocket;
