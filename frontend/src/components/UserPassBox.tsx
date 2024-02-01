import { Form } from "react-bootstrap"
import { FloatingLabel } from "react-bootstrap"
import { Image } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Button } from "react-bootstrap"

function UserPassBox(){
    return <>
    <div style={{width: 475, height: 'auto', margin: 'auto', paddingTop: 200}}>
        <Container>
            <Row>
                <Col>
                    <Image src="react.svg/171x180" roundedCircle />
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
                <Col style={{paddingTop: 15}}><Button variant="primary">Submit</Button>{' '}</Col>
            </Row>
        
        </Container>
    </div>
        
    </>
}

export default UserPassBox