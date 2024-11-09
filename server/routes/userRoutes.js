const express = require("express");
const router = express.Router();
// import { jwt } from "../middlewares/jwt";
const { jwt } = require("../middlewares/jwtMiddleware");  // <-- Use require() instead of import
const { registerUser, loginUser } = require("../controllers/userController");

// Route to register a new user
router.post("/register", registerUser);

// Route to login an existing user
// router.post("/login", jwt, loginUser);
router.post("/login", loginUser);

module.exports = router;