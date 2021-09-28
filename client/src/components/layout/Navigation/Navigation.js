import React from 'react'
import { Container, Nav, Navbar, Row, Col, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Navigation.css'
import Logo from './logo_tricycle.svg'


const authService = new AuthService()


export default function Navigation(props) {

    const logout = () => {

        authService.logout()
            .then(res => props.storeUser(null))
            .catch(err => console.log(err))
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar><Link to="/" ><img className='logoStyle' src={Logo} alt='logo'></img></Link></Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><span>Tricycle 3</span></Nav.Link>
                        <Nav.Link href="#features"><span>Tricycle 4</span></Nav.Link>
                        <Nav.Link href="#features"><span>Tricycle 4 rs</span></Nav.Link>
                    </Nav>
                    <Nav>
                        {props.loggedUser ?
                            <>
                                <Link className="nav-link" to="/perfil">Mi perfil</Link>
                                <span className="nav-link" onClick={logout}>Logout</span>
                            </>
                            :
                            <>
                                <Link className="nav-link" to="/registro">Registro</Link>
                                <Link className="nav-link" to="/iniciar-sesion">Iniciar sesión</Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    )
}

{/* <Navbar fixed="top" >

    <Container fluid>

        <Row>
            <Col xs={3}>
                <Navbar><Link to="/" ><img class='logoStyle' src={Logo} alt='logo'></img></Link></Navbar>
            </Col>
            <Col xs={6}>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Link className="nav-link" to="/"><span>Tricycle 3</span></Link>
                        <Link className="nav-link" to="/montañas-rusas"></Link>

                        <Link className="nav-link" to="/"><span>Tricycle 4</span></Link>
                        <Link className="nav-link" to="/montañas-rusas"></Link>

                        <Link className="nav-link" to="/"><span>Tricycle 4 rs</span></Link>
                        <Link className="nav-link" to="/montañas-rusas"></Link>



                    </Nav>
                </Navbar.Collapse>
            </Col>
            <Col xs={3}>
                <Navbar.Collapse className="loginRegisterBotom">

                    {props.loggedUser ?
                        <>
                            <Link className="nav-link" to="/perfil">Mi perfil</Link>
                            <span className="nav-link" onClick={logout}>Logout</span>
                        </>
                        :
                        <>
                            <Link className="nav-link" to="/registro">Registro</Link>
                            <Link className="nav-link" to="/iniciar-sesion">Iniciar sesión</Link>
                        </>
                    }
                </Navbar.Collapse>
            </Col>
        </Row>

    </Container>

</Navbar > */}