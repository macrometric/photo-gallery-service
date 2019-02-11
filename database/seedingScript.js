const productItem = require("../database/index").Product;
const productData = require("../database/finalData.json");

productItem.insertMany(productData, (err, data) => {
  if (err) {
    console.log("Error in db insert many", err);
  }
  console.log("Data successfully added", data);
});
