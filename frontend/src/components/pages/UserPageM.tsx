import React, { useState } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import DisplayPosts from '../utilities/DisplayPosts';
import EditProfileModal from '../utilities/EditProfileModal'
import banner from '../../assets/banner.png';
import profilePic from '../../assets/profilePic.png'
import user from '../pages/posts'

function UserPageM() {
    const [showEditModal, setShowEditModal] = useState(false);

    // Example currentUser object or identifier
    const currentUser = '@bob'; // This should come from your authentication logic

    const handleEditProfileClick = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
            {/* Account Banner */}
            <div style={{ position: 'relative' }}>
                <Image src={banner} alt="Account Banner" fluid style={{ position: 'absolute', width: '100%', zIndex: -1 }} />
                {/* Add any additional elements or styling for the banner */}
            </div>

            {/* empty div for spacing */}
            <div style={{ height: '25px' }}></div> {/* Adjust the height value as needed */}

            {/* User Profile Information */}
            <Row>
                <Col xs={12} style={{ textAlign: 'center' }}>
                    <Image src={profilePic} alt="Profile" roundedCircle style={{ width: '150px', height: '150px' }} />
                </Col>
                <Col xs={12} style={{ textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '13px' }}>{user.username}</h1>
                    <p style={{ marginBottom: '1px' }}>
                        Followers: <b>{user.followers}</b>
                    </p>
                    <p style={{ marginBottom: '8px' }}>
                        Following: <b>{user.following}</b>
                    </p>
                    <p>{user.bio}</p>
                </Col>
            </Row>

            {/* empty div for spacing */}
            <div style={{ height: '12px' }}></div> {/* Adjust the height value as needed */}

            {/* Buttons */}
            <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
                {/* Conditionally render the Edit Profile button */}
                {currentUser === user.username && (
                    <Col xs={12}>
                        <Button variant="info" size='sm' onClick={handleEditProfileClick}>Edit Profile</Button>
                    </Col>
                )}
            </Row>

            {/* Use the new EditProfileModal component */}
            <EditProfileModal show={showEditModal} handleClose={handleCloseEditModal} />

            {/* empty div for spacing */}
            <div style={{ height: '15px' }}></div> {/* Adjust the height value as needed */}

            {user.posts.reverse().map((post) => (
                <Row key={post.id}>
                    <Col xs={12} style={{ marginBottom: '20px' }}>
                        <DisplayPosts profilePic={user.proPic} username={user.username} content={post.content} />
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default UserPageM;
