import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../../src/App.css';

const NavbarAuthComponent = () => {
    return(
        <div>
            <Navbar expand="lg" bg="light" data-bs-theme="light">
                <Container>

                    <Navbar.Brand as={Link} to={'/'} className='labels'>
                    <img
                        alt=""
                        src="src\logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>{' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'} className='labels'>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/admin'} className='labels'>Admin Dashboard</Nav.Link>
                    </Nav>
                        
                        <Form data-bs-theme="light" className="d-flex justify-content-end">
                            <Form.Control
                                bg='light'
                                type="search"
                                placeholder="Looking for?"
                                className="me-2 search_bar"
                                aria-label="Search"/>
                            <Button variant="info" className='button bi bi-search'></Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarAuthComponent;