const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb://sarah:password1@ds125225.mlab.com:25225/fec-images"
);

const productSchema = new Schema({
  product_id: Number,
  product_name: String,
  images: [{ image_url: String }]
});

const Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;
