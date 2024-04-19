// sign IN page for Desktop and Mobile

import React from 'react';
import { Form, FloatingLabel, Container, Col, Row, Button } from 'react-bootstrap';
import img from '../../assets/mySpaceLogo.png';

function SignInDM() {
    return (
        <Container style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '30px' }}>
            <Row>
                <Col xs={12} style={{ textAlign: 'center' }}>
                    <img src={img} alt="logo" style={{ width: '100px', height: 'auto', marginBottom: '15px' }} />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col xs={12} style={{ marginTop: '15px' }}>
                    <Button variant="primary" style={{ width: '100%' }}>Sign In</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} style={{ marginTop: '10px' }}>
                    <Button variant="outline-primary" href="/signup" style={{ width: '100%' }}>Create an account</Button>
                </Col>
            </Row>
            { /* FORGET PASSWORD PAGE STILL NEEDS TO BE MADE
                <Row>
                <Col xs={12} style={{ marginTop: '10px' }}>
                    <Button variant="link" href="/forgotpassword" style={{ width: '100%', textAlign: 'center' }}>Forgot password?</Button>
                </Col>
            </Row>
            */ }
        </Container>
    );
}

export default SignInDM;
