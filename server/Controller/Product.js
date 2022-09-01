import fs from "fs";
import Product from "../Model/Product";
export const product = async (req,res) => {
      console.log("req.fields", req.fields);
    console.log("req.files", req.files);
  
  try {
    let fields = req.fields;
    let files = req.files;
    let products = new Product(fields);
    
    //handle image
    if (files.image) {    
      products.image.data = fs.readFileSync(files.image.path);
      products.image.contentType = files.image.type;
      products.save((err, results) => {
        if (err) {
          console.log("saving product err =>", err);
          res.status(400).send("Error Saving");
          res.json(results);
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      err: err.message,
    });
  }
};



export const products = async (req, res) => {
  let all = await Product.find({}).limit(30).exec();
  res.json(all);
};
