import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import axios from "axios";
import { getUserIdFromToken } from "../services/auth.api";
import "../assets/markdown.css";

const ProfilePage = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const userId = getUserIdFromToken();
  console.log(userId);

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await axios.get(`/api/profile/${userId}`);
      const fetchedMarkdownText = response.data.profile_markdown;
      setMarkdownText(fetchedMarkdownText);
      setOriginalText(fetchedMarkdownText);
    };

    fetchProfileData();
  }, [userId]);

  const handleSave = async () => {
    await axios.post(`/api/profile/${userId}`, { markdown: markdownText });
    setOriginalText(markdownText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setMarkdownText(originalText);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {isEditing && (
        <div className="markdown-editor">
          <textarea
            style={{ width: "100%", height: "100%" }}
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          />
        </div>
      )}
      <div className="markdown-preview">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProfilePage;
