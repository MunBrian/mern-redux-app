const express = require("express");
const router = express.Router();

const {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalContoller");

router.route("/").get(getAllGoals).post(createGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
