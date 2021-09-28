import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, Row, Col, NavDropdown } from 'react-bootstrap'

export default function Footer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to='/sobre-nosotros'>Sobre nosotros</Link>
                    </Col>
                    <Col>
                        <Link to='/contacto'>Contacto</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
