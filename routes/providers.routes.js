const providersController = require('../controllers/providers.controller');
const router = require('express').Router();

router.get("/:id?", providersController.getProvider);
router.post("/", providersController.createProvider);
router.put("/", providersController.updateProvider);
router.delete("/", providersController.deleteProvider);

module.exports = router;
//POST http