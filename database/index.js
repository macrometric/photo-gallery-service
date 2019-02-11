const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb://sarah:password1@ds125225.mlab.com:25225/fec-images",
  { useNewUrlParser: true }
);

const productSchema = new Schema({
  product_id: Number,
  product_name: String,
  images: [{ image_url: String }]
});

const Product = mongoose.model("Product", productSchema);

const read = callback => {
  Product.find({})
    .then((data, err) => {
      // console.log("In db.read, successfully retrieved: ", data);
      callback(err, data);
    })
    .catch(err => {
      console.log("Error in db.read function", err);
      callback(err);
    });
};

module.exports = { Product, read };
