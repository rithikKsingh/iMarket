import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}); //if you want only certain products
  //you can pass options here. {} for all products

  if (products) {
    return res.json(products);
  }
  res.status(404);
  throw new Error("Resource not found");
});

// @desc    Fetch all product
// @route   GET /api/products/:id
// @access  Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

export { getProducts, getProductsById };
