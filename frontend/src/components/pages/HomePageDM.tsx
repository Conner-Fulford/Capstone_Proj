import React from 'react';
import Logo from '../../assets/mySpaceLogo.png';
import DisplayPosts from '../utilities/DisplayPosts';
import user from '../pages/posts'

const HomePage = () => {
    return (
        <div style={{
            maxWidth: '800px', // Set a maximum width for the content
            margin: '0 auto',  // Center the content horizontally
            padding: '20px',   // Add padding around the content
            textAlign: 'center' // Center align the content
        }}>
            {/* Gray background bar behind the logo */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '15%',
                    backgroundColor: '#f0f0f0', // Light gray background color
                    zIndex: '1',                 // Ensure gray bar is behind the logo
                }}
            />
            {/* Logo centered in front of the gray bar */}
            <div style={{ position: 'relative', zIndex: '2'}}>
                <img
                    src={Logo}
                    alt="MySpace Logo"
                    style={{
                        maxWidth: '100px', // Adjust the maximum width of the logo
                        height: 'auto',    // Let the height adjust automatically
                    }}
                />
            </div>

            {/* empty div for spacing */}
            <div style={{ height: '35px' }}></div> {/* Adjust the height value as needed */}

            {/* Display user's posts */}
            {user.posts.reverse().map((post) => (
                <div key={post.id} style={{ marginBottom: '20px' }}>
                    <DisplayPosts profilePic={user.proPic} username={user.username} content={post.content} />
                </div>
            ))}
        </div>
    );
};

export default HomePage;
