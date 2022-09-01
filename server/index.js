const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
require("dotenv").config();
var multer = require('multer');

//database
mongoose
  .connect(
    "mongodb+srv://Bayo4real:Bayo4real@hms.qg1nt.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection", err));

//middleware
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

let storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null, './public/uploads/')
  },
  filename: function(req,file,cb){
    cb(null, Date.now()+file.originalname)
  }
})

const fileFilter = (req,file,cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === "image/png"){
    cb(null,true);

  } else {
    cb(null,false)
  }
}

let upload = multer({
  storage:storage,
 fileFilter:fileFilter
})

app.post("/uploadForm", upload.single('StoreImage'), async (req,res, next) => {
  if(req.file){
    const pathName = req.file.path;
    res.send(req.file.pathName)
  }
})

filepath = ''

//route middleware
readdirSync("./route").map((r) => app.use("/api", require(`./route/${r}`)));
//port
const port = 8000;
app.listen(port, () => {
  console.log(`listen to ${port}`);
});



//   app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
//   });
