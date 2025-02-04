import { DataSource } from "typeorm";
import { URLShortening } from "./entities/url-shortening.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "supersecret",
  database: "urlShortening",
  synchronize: true,
  logging: true,
  entities: [URLShortening],
  subscribers: [],
  migrations: [],
});
