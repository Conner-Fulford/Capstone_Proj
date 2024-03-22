import db from "../config/db";

const post = async (req: any, res: any) => {
  const { user_id, post_content, post_type, media_url } = req.body;
  try {
    if (
    !user_id ||
    !post_content ||
    !post_type ||
    (!media_url && (post_type === "text_image" || post_type === "text_video"))
    ) {
    return res.status(400).json({ error: "Missing required fields" });
    }

    const user = {
        userID: user_id,
        postContent: post_content,
        postType: post_type,
        mediaURL: media_url
    }
    await db.query(`INSERT INTO posts (user_id, post_content, post_type, media_url) VALUES ($1, $2, $3, $4)`, [user.userID, user.postContent, user.postType, user.mediaURL])
    res.status(201).json({ message: "Post created successfully" });
  } catch (error: any) {
    return res.status(400).json(error.message);
  }
};

export default { post };
