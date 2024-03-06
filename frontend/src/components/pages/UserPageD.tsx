import { useState } from 'react';
import {Container, Button, Nav, Navbar, Offcanvas, Tab, Tabs, Row, Col, Card, CardFooter, CardHeader} from "react-bootstrap";
import img from '../../assets/mySpaceLogo.png';
import hamburger from '../../assets/hamburger.png';

function UserPageD (){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return<>

        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img src={img} width={100}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    </Navbar.Collapse>
                    <Button variant="light" onClick={handleShow}>
                        <img src={hamburger} width={80}/>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} placement='end'>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Menu Elements will go here such as Account and Settings and stuff.
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
            <Container fluid className=''>
                <Row >
                    <Col className="h-600">Banner Image goes here as well as pfp</Col>
                    
                    
                </Row>
                                
            </Container>
            <Container>
                <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
                >
                    <Tab eventKey="posts" title="Posts">
                        <Container>
                            <Row className='justify-center mt-50'md={4}>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                            <Card.Title>14 likes</Card.Title>
                                            <Card.Text>
                                            This is where the post caption will be...
                                            </Card.Text>
                                        </Card.Body>
                                        <CardFooter>
                                            3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body>
                                                <Card.Title>14 likes</Card.Title>
                                                <Card.Text>
                                                This is where the post caption will be...
                                                </Card.Text>
                                            </Card.Body>
                                            <CardFooter>
                                                3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body>
                                                <Card.Title>14 likes</Card.Title>
                                                <Card.Text>
                                                This is where the post caption will be...
                                                </Card.Text>
                                            </Card.Body>
                                            <CardFooter>
                                                3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body>
                                                <Card.Title>14 likes</Card.Title>
                                                <Card.Text>
                                                This is where the post caption will be...
                                                </Card.Text>
                                            </Card.Body>
                                            <CardFooter>
                                                3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='justify-center mt-50'md={4}>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                            <Card.Title>14 likes</Card.Title>
                                            <Card.Text>
                                            This is where the post caption will be...
                                            </Card.Text>
                                        </Card.Body>
                                        <CardFooter>
                                            3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body>
                                                <Card.Title>14 likes</Card.Title>
                                                <Card.Text>
                                                This is where the post caption will be...
                                                </Card.Text>
                                            </Card.Body>
                                            <CardFooter>
                                                3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body>
                                                <Card.Title>14 likes</Card.Title>
                                                <Card.Text>
                                                This is where the post caption will be...
                                                </Card.Text>
                                            </Card.Body>
                                            <CardFooter>
                                                3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <CardHeader>Posted 1 day(s) ago</CardHeader>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Body>
                                                <Card.Title>14 likes</Card.Title>
                                                <Card.Text>
                                                This is where the post caption will be...
                                                </Card.Text>
                                            </Card.Body>
                                            <CardFooter>
                                                3 comment(s)...
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="profile" title="Tab 2">
                        Tab content
                    </Tab>
                    <Tab eventKey="longer-tab" title="Tab 3">
                        Tab content
                    </Tab>
                    <Tab eventKey="account-settings" title="Account Settings">
                        Tab content for Account Settings
                    </Tab>
                </Tabs>
            </Container>
        </div>
    
    </>
}

export default UserPageD