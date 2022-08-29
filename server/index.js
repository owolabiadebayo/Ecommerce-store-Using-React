const { readdirSync } = require("fs");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json);
app.use(cors());

readdirSync("./Route").map((r) => app.use("/api", require(`./Route/${r}`)));

const port = 8000;
app.listen(port, () => {
  console.log(`listen to ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://vnatius:Blessing1@cluster0.zk1tnuf.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection", err));

//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
//   });
