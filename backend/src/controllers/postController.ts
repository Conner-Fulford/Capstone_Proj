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

const get_post = async (req: any, res: any) => {
  const { post_id } = req.body;
  try {
    if(Number.isInteger(post_id)){
      const data = await db.query(`SELECT * FROM posts WHERE post_id= $1;`, [
        post_id,
      ]);

      res.status(201).json({
        post_id: data["rows"][0]["post_id"],
        user_id:  data["rows"][0]["user_id"],
        post_content:  data["rows"][0]["post_content"],
        post_type:  data["rows"][0]["post_type"],
        media_url:  data["rows"][0]["media_url"],
        created_at:  data["rows"][0]["created_at"]
      });

    } else {
      return res.status(400).json({ error: "Post ID is not an integer!" });
    }




  } catch (error: any) {
    return res.status(400).json(error.message);
  }
};

export default { post, get_post};
