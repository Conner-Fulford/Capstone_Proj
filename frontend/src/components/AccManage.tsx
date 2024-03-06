import React from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import DisplayPosts from '../components/DisplayPosts';
import img from '../assets/mySpaceLogo.png';
import banner from '../assets/banner.png';
import profilePic from '../assets/profilePic.png'

function AccountManagement() {
    const user = {
        proPic: '../assets/profilePic.png',
        userBanner: '../assets/banner.png',
        username: '@bob',
        bio: 'Hello, I am a sample user!',
        followers: 68,
        following: 3,
        posts: [
            { id: 1, content: "my very first post" },
            { id: 2, content: "i am aware that i'm not concious, and im just a test user" },
            // Add more posts as needed
        ],
    };

    return (
        <Container style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }} >
            {/* Account Banner */}
            <div style={{position: 'relative'}}>
                <Image src={banner} alt="Account Banner" fluid style={{ position: 'absolute', width: '100%', zIndex: -1 }} />
                {/* Add any additional elements or styling for the banner */}
            </div>

            {/* empty div for spaceing */}
            <div style={{ height: '25px' }}></div> {/* Adjust the height value as needed */}

            {/* User Profile Information */}
            <Row>
                <Col>
                    <Image src={profilePic} alt="Profile" roundedCircle style={{ marginLeft: '20px', width: '150px', height: '150px' }} />
                </Col>
                <Col>
                    <h1 style={{ marginBottom: '13px'}}>{user.username}</h1>
                    <p style={{ marginBottom: '1px' }}>
                        Followers: <b>{user.followers}</b>
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                        Following: <b>{user.following}</b>
                    </p>
                    <p>{user.bio}</p>
                </Col>
            </Row>

            {/* empty div for spaceing */ }
            <div style={{ height: '12px' }}></div> {/* Adjust the height value as needed */}

            {/* Buttons */}
            <Row style={{justifyContent: 'center', textAlign: 'center' }}>
                <Col>
                    <Button variant="info" size='sm'>Edit Profile</Button>
                </Col>
                <Col>
                    <Button variant="danger" size='sm'>Delete Account</Button>
                </Col>
            </Row>

            {/* empty div for spaceing */}
            <div style={{ height: '15px' }}></div> {/* Adjust the height value as needed */}

            <Row>
                {user.posts.reverse().map((post) => (
                    <Col key={post.id} md={4} style={{ marginBottom: '20px' }}>
                        <DisplayPosts profilePic={user.proPic} username={user.username} content={post.content} />
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default AccountManagement;
