// sign UP page for Desktop and Mobile

import React, { useState } from 'react';
import { Form, FloatingLabel, Container, Col, Row, Button } from 'react-bootstrap';
import img from '../../assets/mySpaceLogo.png';

function SignUpDM() {
    const [password, setPassword] = useState('');
    const [isEightCharacters, setIsEightCharacters] = useState(false);
    const [hasCapitalLetter, setHasCapitalLetter] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

    // Function to update checklist
    const updateChecklist = (password) => {
        setIsEightCharacters(password.length >= 8);
        setHasCapitalLetter(/[A-Z]/.test(password));
        setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    };

    // Handler function to update password and checklist
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        updateChecklist(newPassword);
    };

    return (
        <div style={{ width: '100%', height: '100%', paddingLeft: '10%', paddingRight: '10%', paddingTop: '30px' }}>
            <Container>
                <Row>
                    <Col xs={12} style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <img src={img} alt="logo" style={{ width: '150px', height: 'auto' }} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FloatingLabel controlId="username" label="Username" className="mb-3">
                            <Form.Control type="text" placeholder="Enter your username" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <FloatingLabel controlId="password" label="Password" className="mb-3">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div style={{ marginLeft: '20px' }}>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li>{isEightCharacters ? '✅' : '❌'} At least 8 characters</li>
                                <li>{hasCapitalLetter ? '✅' : '❌'} At least one capital letter</li>
                                <li>{hasSpecialCharacter ? '✅' : '❌'} At least one special character</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Button variant="primary" style={{ width: '100%' }}>Create Account</Button>{' '}
                    </Col>
                </Row>
                { /* LINK THIS ONCE URL SYSTEM IS SETUP */ }
                <Row>
                    <Col xs={12} style={{ paddingTop: '10px', textAlign: 'center' }}>
                        <a href="cd" style={{ textDecoration: 'none', color: '#007bff' }}>Back to Sign In</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUpDM;
