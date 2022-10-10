const express = require('express');
const router = express.Router();


const { deleteProduct, getProducts, newProduct, getSingleProduct, updateProduct } = require('../controllers/productController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

//Regular user routes
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

//Admin Routes
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

router.route('/admin/product/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

module.exports = router;

