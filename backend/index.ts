import server from "./src/app";
import config from "./src/config";
import prisma from "./src/lib/prisma";

async function bootstrap() {
  server.listen(config.PORT, () => {
    console.log(`Server on port ${config.PORT}`);
  });

  await prisma.$connect()

  console.log("Database connect")
}

await bootstrap();
