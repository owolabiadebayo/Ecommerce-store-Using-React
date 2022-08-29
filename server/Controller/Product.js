import fs from "fs";
import { findSourceMap } from "module";
import Product from "../Model/Product";
export const product = async (require) => {
  try {
    let fields = req.fields;
    let files = req.files;
    let products = new Product(fields);
    if (files.map) {
      products.image.data = fs.readFileSync(files.image.path);
      products.image.contentType = files.image.type;
      products.save((err, results) => {
        if (err) {
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
