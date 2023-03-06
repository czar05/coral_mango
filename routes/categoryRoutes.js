const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
router.get("/category/:id", categoryController.getAll);
router.post("/category/new", categoryController.createCategory);
module.exports = router;
