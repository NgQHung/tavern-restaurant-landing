const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require authentication for all routes
// router.use(requireAuth);

// login
router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);

module.exports = router;
