import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Navbarx = () => {
    
    return (
        <Navbar
           /*  bg="dark"
            variant="dark" */
            expand="lg"
            style={{ backgroundColor: '#151D3B' }}>
            <Container>
                <Navbar.Brand
                    href="/"
                    style={{ color: '#6EBF8B' }}
                >Dashboard</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{ color: '#6EBF8B' }} />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{ color: '#6EBF8B' }}>
                    <Nav
                        className="me-auto"
                        style={{ color: '#6EBF8B' }}>

                        <Nav.Link
                            href="/crear"
                            style={{ color: '#6EBF8B' }}
                        >Crear <i className="fa-solid fa-circle-plus"></i></Nav.Link>
                                            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarx
