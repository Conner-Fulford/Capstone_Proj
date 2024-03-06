// EditProfileModal.tsx
import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

interface EditProfileModalProps {
    show: boolean;
    handleClose: () => void;
    updateUserProfile: (formData: FormData) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ show, handleClose, updateUserProfile }) => {
    const [formData, setFormData] = useState({
        username: '',
        bio: '',
        profilePic: null as File | null,
        banner: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: files[0],
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('username', formData.username);
        formDataToSend.append('bio', formData.bio);
        formDataToSend.append('profilePic', formData.profilePic || '');
        formDataToSend.append('banner', formData.banner || '');
        // You can now send this formData to your backend for processing
        updateUserProfile(formDataToSend);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your new username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your new bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formProfilePic">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            name="profilePic"
                            onChange={handleFileChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBanner">
                        <Form.Label>Banner</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            name="banner"
                            onChange={handleFileChange}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    );
};

export default EditProfileModal;
