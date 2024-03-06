import { Form } from "react-bootstrap"
import { FloatingLabel } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Button } from "react-bootstrap"
import img from '../../assets/mySpaceLogo.png';

function UserPassBoxM() {
    return (
        <>
            <div style={{ width: 'auto', height: 'auto', margin: 'auto', paddingTop: 30 }}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <img src={img} alt="logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '100px', height: 'auto', paddingBottom: 15 }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={{ paddingTop: 15 }}>
                            <Button variant="primary" style={{ width: '100%' }} >Submit</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default UserPassBoxM;
