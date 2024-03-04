import { useState } from 'react';
import {Container, Button, Carousel, Nav, Navbar, Offcanvas} from "react-bootstrap";
import img from '../../assets/mySpaceLogo.png';
import hamburger from '../../assets/hamburger.png';

function HomePageD(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
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
            <Carousel>
                <Carousel.Item className="flex-fill" interval={999999}>
                    <img src={hamburger} alt='First Slide'/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="flex-fill" interval={999999}>
                    <img src={hamburger} alt='Second Slide'/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="flex-fill" interval={999999}>
                    <img src={hamburger} alt='Third Slide'/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
}

export default HomePageD