import {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;

// import express from "express";
// const router = express.Router();
// import {
//   getProducts,
//   // getProductById,
//   createProduct,
//   updateProduct,
//   // deleteProduct,
//   // createProductReview,
//   // getTopProducts,
// } from "../controllers/productController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";
// // import checkObjectId from "../middleware/checkObjectId.js";

// router.route("/").get(getProducts).post(protect, admin, createProduct);
// // router.route("/:id/reviews").post(protect, checkObjectId, createProductReview);
// // router.get("/top", getTopProducts);
// router
//   .route("/:id")
//   // .get(checkObjectId, getProductById)
//   .put(protect, admin, updateProduct);
// // .delete(protect, admin, checkObjectId, deleteProduct);

// export default router;
