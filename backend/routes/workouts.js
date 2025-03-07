const express = require("express")
const router = express.Router()
const {
	getWorkouts,
	createWorkout,
	getSingleWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController")
const {requireAuth} = require("../middlewares/requireAuth")

router.use(requireAuth)

router.get("/", getWorkouts)

router.get("/:id", getSingleWorkout)

router.post("/", createWorkout)

router.patch("/:id", updateWorkout)

router.delete("/:id", deleteWorkout)

module.exports = router

// const express = require("express");
// const router = express.Router();

// const { loginUser, signupUser } = require("../controllers/userController");

// router.post("/login", loginUser);

// router.post("/signup", signupUser);

// module.exports = router;
