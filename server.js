const express = require("express");
const app = express();
const birds = require("./birds");
const PORT = 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const COOKIE_OPTIONS = {
  httpOnly: true,
  domain: "localhost",
  secure: false,
  path: "/",
  // 30 days
  expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 30),
};

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/get-cookie", (req, res) => {
  const token = `${Math.random() * 100}`;

  res.cookie("random-cookie-token", token, COOKIE_OPTIONS);
  res.send("have a cookie from the cookie jar");
});

app.use("/birds", birds);
