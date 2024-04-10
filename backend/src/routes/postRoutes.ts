import express from "express";
import postController from "../controllers/postController";
import verifyJWT from "../middlewares/authMiddleware";
import db from "../config/db";

const router = express.Router();

router.post("/api/post", verifyJWT, postController.post);
router.post("/api/get_post", postController.get_post);

router.get("/api/profile/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log("userId", userId)
  try {
    const { rows } = await db.query(
      "SELECT profile_markdown FROM users WHERE user_id = $1",
      [userId]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching profile data" });
  }
});

router.post("/api/profile/:userId", async (req, res) => {
  const userId = req.params.userId;
  const markdown = req.body.markdown;
  try {
    await db.query("UPDATE users SET profile_markdown = $1 WHERE user_id = $2", [
      markdown,
      userId,
    ]);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while updating profile data" });
  }
});

export default router;
