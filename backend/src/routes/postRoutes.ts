import express, { Request, Response } from "express";
import postController from '../controllers/postController';

const router = express.Router();

router.post('/api/post', postController.post);

export default router;