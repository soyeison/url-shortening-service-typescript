import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(() => {
  console.log(`API ejecutandose en el puerto ${port}`);
});
