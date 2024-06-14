import prisma from "../lib/prisma";

async function create() {
  const jam = await prisma.jam.create({ data: { id: crypto.randomUUID() } });

  return jam;
}

async function add(id: string, user: number) {
  const foundUser = await prisma.jam_user.findUnique({
    where: {
      jam_id_user_id: {
        user_id: user,
        jam_id: id,
      },
    },
  });

  if (foundUser) throw new Error("User in jam");

  const addedUser = await prisma.jam_user.create({
    data: { jam_id: id, user_id: user },
  });

  return addedUser;
}

async function outJam(id: string, user: number) {
  const outOfJam = await prisma.jam_user.delete({
    where: {
      jam_id_user_id: {
        user_id: user,
        jam_id: id,
      },
    },
  });

  return outOfJam;
}

const jamService = { create, add, outJam };

export default jamService;
