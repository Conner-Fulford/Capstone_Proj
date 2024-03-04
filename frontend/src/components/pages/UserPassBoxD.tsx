import { Form } from "react-bootstrap"
import { FloatingLabel } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Button } from "react-bootstrap"
import img from '../../assets/mySpaceLogo.png';

function UserPassBoxD() {
    return <>
        <div style={{ width: 475, height: 'auto', margin: 'auto', paddingTop: 200 }}>
            <Container>
                <Row>
                    <Col>
                        <img src={img} alt="logo" style={{ width: '150px', height: 'auto' }} />
                    </Col>
                    <Col xs={6}>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col style={{ paddingTop: 5 }}><Button variant="primary" style={{ width: '100%' }}>Submit</Button>{' '}</Col>
                </Row>

            </Container>
        </div>

    </>
}

export default UserPassBoxD