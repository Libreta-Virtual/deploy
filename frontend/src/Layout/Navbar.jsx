import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Navbarx = () => {
    
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            style={{ backgroundColor: '#0E3EDA' }}>
            <Container>
                <Navbar.Brand
                    href="/"
                    style={{ color: '#FFDDEE' }}
                >Dashboard</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{ color: '#FFDDEE' }} />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{ color: '#FFDDEE' }}>
                    <Nav
                        className="me-auto"
                        style={{ color: '#FFDDEE' }}>

                        <Nav.Link
                            href="/crear"
                            style={{ color: '#FFDDEE' }}
                        >Crear <i className="fa-solid fa-circle-plus"></i></Nav.Link>
                                            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarx