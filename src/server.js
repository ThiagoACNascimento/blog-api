import { config } from "./config.js";
import fastify from "fastify";
import statusRoutes from "./api/v1/status/index.js";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

app.register(statusRoutes, { prefix: "/api/v1/" });

app.listen({
  port: config.port,
});
