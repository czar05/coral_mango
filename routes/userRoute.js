const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.post("/users/register", userController.register);
router.post("/users/login", userController.login);
router.get("/users/logout", userController.logout);
module.exports = router;
