import React from 'react';
import { Image } from 'react-bootstrap';
import profilePic1 from '../assets/profilePic.png'

interface PostCardProps {
    profilePic: string;
    username: string;
    content: string;
}

const PostCard: React.FC<PostCardProps> = ({ profilePic, username, content }) => {
    return (
        <div style={{ display: 'flex', border: '2px solid #ccc', borderRadius: '8px', marginBottom: '0px', marginLeft: '5px', marginRight: '5px' }}>
            <div style={{ flex: '1/4', padding: '8px' }}>
                <Image src={profilePic1} alt="Profile" roundedCircle style={{ width: '50px' }} />
            </div>
            <div style={{ flex: '3/4', padding: '8px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0px' }}>{username}</div>
                <div style={{ fontSize: '1rem' }}>{content}</div>
            </div>
        </div>
    );
};

export default PostCard;
