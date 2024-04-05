//const require = createRequire(import.meta.url);
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const conf = JSON.parse(fs.readFileSync("conf.json"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post("/wordCounter", (request, response) => {
  try {
    const { stringa } = request.body;
    const count = contaCaratteri(stringa);
    response.json({ result: count });
  } catch (error) {
    response.json({ result: "//" });
  }
});

//reindirizzamento alla cartella public
app.use("/", express.static(path.join(__dirname, "public")));
const server = http.createServer(app);
server.listen(conf.port, () => {
  console.log("---> server running");
});
