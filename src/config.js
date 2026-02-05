import dotenv from "dotenv";
import { expand } from "dotenv-expand";

const nodeEnv = process.env.NODE_ENV || "development";

const env = dotenv.config({
  path: `.env.${nodeEnv}`,
});

expand(env);

export const config = {
  env: nodeEnv,
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL,
    user: process.env.POSTGRES_USER,
  },
};
