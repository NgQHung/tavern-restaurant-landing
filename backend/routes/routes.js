const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "main page" });
});

router.get("/login", (req, res) => {
    res.json({ message: "login page" });
});

router.get("/signup", (req, res) => {
    res.json({ message: "signup page" });
});

module.exports = router;
