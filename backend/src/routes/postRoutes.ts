import express from "express";
import postController from '../controllers/postController';
import verifyJWT from '../middlewares/authMiddleware'; 

const router = express.Router();

router.post('/api/post', verifyJWT, postController.post);

export default router;