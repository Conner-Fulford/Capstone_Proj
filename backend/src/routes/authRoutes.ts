const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const registerController = require('../controllers/registerController');
const accountController = require('../controllers/accountController');

router.post('/auth/register', registerController.register);

router.post("/auth/login", loginController.login);

router.post('/auth/account', accountController.account);


module.exports = router;