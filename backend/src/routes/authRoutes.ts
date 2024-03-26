import express, { Request, Response } from 'express';
import authController from '../controllers/authController';
import verifyJWT from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/api/auth/register', authController.register);

router.post("/api/auth/login", authController.login);

router.post('/api/auth/account', authController.account);

router.post('/api/auth/get_user', authController.get_user);

router.post('/api/auth/update_password', authController.update_password);

router.post('/api/auth/verify', verifyJWT, (req: Request, res: Response) => {
    res.status(200).json({ authenticated: true });
});

export default router;