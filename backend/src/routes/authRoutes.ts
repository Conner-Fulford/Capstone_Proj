const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require('../controllers/registerController');

router.post('/auth/register', registerController.register);

router.post("/auth/login", loginController.login);


module.exports = router;