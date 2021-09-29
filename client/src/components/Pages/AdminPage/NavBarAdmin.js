import 'bootstrap'
import './NavBarAdmin.css'
import { Navbar, Container, Nav, Row } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBarAdmin() {
    return (
        <Navbar bg="light" expand={false} className='col-4 admin-navbar'>

            <Container>
                <Navbar.Brand href='/admin-panel'>Panel de Administrador</Navbar.Brand>
            </Container>
            <Container>
                <Nav.Link as={Link} to='/nueva-bici'><span>Nueva bici</span></Nav.Link>
            </Container>
            <Container>
                <Nav.Link as={Link} to={`/editar-bici/`}><span>Editar bici</span></Nav.Link>
            </Container >
            <Container>
                <Nav.Link as={Link} to='/nueva-tienda'><span>Nueva tienda</span></Nav.Link>
            </Container>
            <Container>
                <Nav.Link as={Link} to={`/editar-tienda/`}><span>Editar tienda</span></Nav.Link>
            </Container>
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
