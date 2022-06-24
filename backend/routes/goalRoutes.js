const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalContoller");

router.route("/").get(protect, getAllGoals).post(protect, createGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
