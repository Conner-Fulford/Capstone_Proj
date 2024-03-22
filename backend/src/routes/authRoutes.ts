import express, { Request, Response } from 'express';
import loginController from '../controllers/loginController';
import registerController from '../controllers/registerController';
import accountController from '../controllers/accountController';
import verifyJWT from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/api/auth/register', registerController);

router.post("/api/auth/login", loginController);

router.post('/api/auth/account', accountController);

router.post('/api/auth/verify', verifyJWT, (req: Request, res: Response) => {
    res.status(200).json({ authenticated: true });
});

export default router;