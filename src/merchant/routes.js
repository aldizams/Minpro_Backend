const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getMerchant);
router.get('/:id', controller.getMerchantById);
router.post('/', controller.addMerchant);

module.exports = router;
