import express from 'express';
import loginController from '../controllers/loginController';
import registerController from '../controllers/registerController';
import accountController from '../controllers/accountController';

const router = express.Router();

router.post('/auth/register', registerController);

router.post("/auth/login", loginController);

router.post('/auth/account', accountController);


export default router;