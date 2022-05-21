const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getMerchant);
router.get('/:id', controller.getMerchantById);
router.post('/', controller.addMerchant);
router.delete('/:id', controller.deleteMerchant);
router.get('/Product/', controller.getProduct);
router.get('/Product/:id', controller.getProductById);
router.post('/Product/', controller.addProduct);
router.delete('/Product/:id', controller.deleteProduct);
router.put('/Product/:id', controller.updateProduct);

module.exports = router;
