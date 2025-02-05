import express from "express";
import "dotenv/config";
import { urlShorteningRouter } from "./routes/url-shortening.route";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

app.use("/shorten", urlShorteningRouter);

AppDataSource.initialize()
  .then(async () => {
    app.listen(process.env.PORT, () => {
      console.log(`API ejecutandose en el puerto ${process.env.PORT}`);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
