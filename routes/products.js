const express = require("express");
const router = express.Router();
//./bin/www -> app.js -> router -> controller -> model
const {
	getAllProducts,
	createProducts,
	getOneProductById,
	updateOneProductById,
	deleteOneProductById,
} = require("../controllers/productController").default;

router.get("/", (req, res) => {
	//res.send response with a string
	res.send("hello from store");
});

// router.get("/function", function(req,res){
// same as above
// })
//callback are used inside as an argument
//All routes coming in from regular browser url are get routes
router.get("/all-products", getAllProducts);
router.post("/create-products", createProducts);
router.get("/get-one-product/:idToGet", getOneProductById);
router.put("/update-by-id/:idToUpdate", updateOneProductById);
router.delete("/delete-by-id/:idToDelete", deleteOneProductById);

//MVC: Model, Controller, View
//View: React Application

// router.post()
// router.delete()
module.exports = router;
