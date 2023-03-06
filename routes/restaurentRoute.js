const express = require("express");
const router = express.Router();
const restaurentController = require("../controllers/restaurentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.get("/restaurent", restaurentController.getAll);
router.get("/restaurent/:id", restaurentController.getRestaurent);
router.post(
  "/restaurent/create",
  // isAuthenticatedUser,
  // authorizeRoles("admin"),
  restaurentController.create
);
router.post(
  "/restaurent/review",
  isAuthenticatedUser,
  restaurentController.createReview
);
router.get(
  "/restaurent/admin",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  restaurentController.getRestaurentReview
);

module.exports = router;
