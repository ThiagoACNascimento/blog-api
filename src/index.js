import Fastify from "fastify";
import userRoutes from "./routes/user.route.js";

const fastify = Fastify({
  logger: true,
});

userRoutes(fastify);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

await start();
