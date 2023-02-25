const express = require("express");
const router = express.Router();
const restaurentController = require("../controllers/restaurentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.get("/restaurent", restaurentController.getAll);
router.post(
  "/restaurent/create",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  restaurentController.create
);
router.put(
  "/restaurent/review",
  isAuthenticatedUser,
  restaurentController.createReview
);
module.exports = router;
