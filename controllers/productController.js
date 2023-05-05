const Products = require("../models/product");

async function getAllProducts(req, res, next) {
	try {
		const allProducts = await Products.find({});
		res.json({ success: true, products: allProducts });
	} catch (error) {
		res.json({ success: false, message: error });
	}
}

async function createProducts(req, res) {
	try {
		const newProduct = new Products({
			title: req.body.title,
			author: req.body.author,
			text: req.body.text,
			category: req.body.category.split(","),
		});
		const response = await newProducts.save();
		res.json({ success: true, addedProducts: response });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error });
	}
}

async function getOneProductById(req, res) {
	try {
		//console.log(req.params);
		const { idToGet } = req.params;
		console.log(idToGet);

		const foundProducts = await Products.findOne({ id: idToGet });
		//check if the blog exists
		//throw will move to catch
		if (foundProducts === null) throw "Product not found";

		res.json({ success: true, blog: foundBlog });
	} catch (error) {
		console.log("Error Message", error);
		res.json({ success: false, message: error });
	}
}

async function updateOneProductById(req, res) {
	try {
		const { idToUpdate } = req.params;

		const updatedProduct = await Products.findOneAndUpdate(
			{ id: idToUpdate },
			req.body
		);
		// const updatedBlog = Blog.updateOne({id: req.params.id}, req.body);
		res.json({ success: true, productsUpdate: updatedProduct });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error });
	}
}
async function deleteOneProductById(req, res) {
	try {
		const { idToDelete } = req.params;
		const deletedProduct = await Products.findOneAndDelete({ id: idToDelete });
		res.json({ success: true, deleteProducts: deletedProduct });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error });
	}
}

module.exports = {
	getAllProducts,
	createProducts,
	getOneProductById,
	updateOneProductById,
	deleteOneProductById,
};
