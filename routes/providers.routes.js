const providersController = require('../controllers/providers.controller');
const router = require('express').Router();

router.get("/:id?", providersController.getProvider);
router.post("/", providersController.createProvider);
router.put("/:id", providersController.updateProvider);
router.delete("/:id", providersController.deleteProvider);

module.exports = router;
//POST http