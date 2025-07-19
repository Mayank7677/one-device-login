const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../../middlewares/auth.middleware");

router.post("/create", userController.create);
router.post("/login", userController.login);
router.get("/dashboard", authMiddleware, userController.dashboard);
router.get("/logout", authMiddleware, userController.logout);

module.exports = router;
