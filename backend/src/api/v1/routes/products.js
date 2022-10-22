const router = require('express').Router();
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
} = require('../product/controller');


const {
  addProductValidator,
  updateProductValidator,
  idValidator,
} = require('../product/validator');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const validationResult = require('../validators');

router.post('/', addProductValidator, validationResult, addProduct);

router.patch(
  '/:id',
  idValidator,
  updateProductValidator,
  validationResult,
  updateProduct
);

router.delete('/:id', idValidator, validationResult, deleteProduct);

router.get('/', getProducts);

router.get('/:id',  getSingleProduct);

module.exports = router;
