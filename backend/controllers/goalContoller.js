const asyncHandler = require("express-async-handler");
//@desc Get all goals
//@route GET/api/v1/goals
//@access Private
const getAllGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

//@desc Create goal
//@route POST/api/v1/goals
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "create goal" });
});

//@desc Update goal
//@route PUT/api/v1/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

//@desc Delete goal
//@route DELETE/api/v1/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete goal" });
});

module.exports = {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
