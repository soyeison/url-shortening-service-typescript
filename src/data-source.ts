import "dotenv/config";
import { DataSource } from "typeorm";
import { URLShortening } from "./entities/url-shortening.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: +(process.env.DATABASE_PORT ?? 5432),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [URLShortening],
  subscribers: [],
  migrations: [],
});
