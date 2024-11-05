const providersController = require('../controllers/providers.controller');
const router = require('express').Router();

router.get("/:id?", providersController.getProvider);
router.post("/", providersController.createProvider);
router.put("/:companyName", providersController.updateProvider);
router.delete("/:companyName", providersController.deleteProvider);

module.exports = router;
//POST http