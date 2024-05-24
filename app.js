const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");
const gamesRoute = require("./routes/games");
const cors = require("./middlewares/cors");

const PORT = 3000;

const app = express();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRoute
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
