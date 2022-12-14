const express = require('express');
const router = express.Router();


const { deleteProduct, getProducts, newProduct, getSingleProduct, updateProduct, createProductReview, getProductReviews, deleteReview } = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//Regular user routes
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

//Admin Routes
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

router.route('/admin/product/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)


module.exports = router;

