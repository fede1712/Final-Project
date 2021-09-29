import 'bootstrap'
import './NavBarAdmin.css'
import { Navbar, Container, Nav, Row } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBarAdmin() {
    return (
        <Navbar bg="light" expand={false} className='col-2 admin-navbar'>

            <Container>
                <Navbar.Brand href='/admin-panel'>Panel de Administrador</Navbar.Brand>
            </Container>
            <Container>
                <Nav.Link as={Link} to={`/lista-bicis/`}><span>Bicicletas</span></Nav.Link>
            </Container >
            <Container>
                <Nav.Link as={Link} to={`/lista-tiendas/`}><span>Tiendas</span></Nav.Link>
            </Container >
            <Container>
                <Nav.Link as={Link} to='/stock'><span>Stcok</span></Nav.Link>
            </Container>
            <Container>
                <Nav.Link as={Link} to='/clientes'><span>Clientes</span></Nav.Link>
            </Container>
            <Container>
                <Nav.Link as={Link} to='/ventas'><span>Ventas</span></Nav.Link>
            </Container>
        </Navbar >
    )
}
