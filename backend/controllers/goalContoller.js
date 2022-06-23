const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc Get all goals
//@route GET/api/v1/goals
//@access Private
const getAllGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
});

//@desc Create goal
//@route POST/api/v1/goals
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc Update goal
//@route PUT/api/v1/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error(`Goal with ${req.params.id} not found.`);
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(updatedGoal);
});

//@desc Delete goal
//@route DELETE/api/v1/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findByIdAndRemove(req.params.id);

  console.log(goal);

  if (!goal) {
    res.status(400);
    throw new Error(`Goal with ${req.params.id} not found.`);
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
