import express from "express";
import { urlShorteningRouter } from "./routes/url-shortening.route";

const app = express();
const port = 3000;

app.use("/url-shortening", urlShorteningRouter);

app.listen(() => {
  console.log(`API ejecutandose en el puerto ${port}`);
});
