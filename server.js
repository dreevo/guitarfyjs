const express = require("express");
const app = express();
const PORT = 4000;
const guitars = require("./guitars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/guitars", (req, res) => {
  res.json(guitars);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
