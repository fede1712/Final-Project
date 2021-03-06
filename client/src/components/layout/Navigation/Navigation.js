import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import CartService from '../../../services/cart.services'
import BikeService from '../../../services/bike.service'
import './Navigation.css'
import Logo from './logo_tricycle.svg'


const authService = new AuthService()
const cartService = new CartService()
const bikeService = new BikeService()


export default function Navigation(props) {

    const [products, setProducts] = useState(0)
    const [lastBike, setLastBike] = useState(undefined)


    useEffect(() => {
        totalProducts()
        fetchLastBike()
    }, [])

    const logout = () => {
        authService.logout()
            .then(() => props.storeUser(null))
            .catch(err => console.error(err))
    }

    const fetchLastBike = () => {
        bikeService.getLastBike()
            .then(res => {
                setLastBike(res.data[0])
            })
            .catch(err => console.error(err))
    }

    let speedVertical = 0
    let speedHorizontal = 0
    let spaceLeft

    const applyScrollEffects = () => {

        window.scrollY > 100 ?
            document.querySelector('.navigation')?.classList.add('sticky') :
            document.querySelector('.navigation')?.classList.remove('sticky')

        document.querySelectorAll('.parallax').forEach(elm => {

            spaceLeft = elm.getBoundingClientRect().top

            elm.dataset.axis === 'vertical' ? speedVertical = elm.dataset.speed * spaceLeft : speedVertical = 0
            elm.dataset.axis === 'horizontal' ? speedHorizontal = elm.dataset.speed * spaceLeft : speedHorizontal = 0

            elm.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`
        })
    }
    document.addEventListener('scroll', applyScrollEffects)

    const totalProducts = () => {
        cartService.findCart()
            .then(res => {
                setProducts(res.data.cart.products.length)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Navbar className="navCss navigation" collapseOnSelect expand="lg" fixed="top"  >

                <Container fluid>

                    <Navbar><Link to="/" ><img className='logoStyle' src={Logo} alt='logo'></img></Link></Navbar>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/61547d68a1b6776152378f8c"><span className="navSpan">Tricycle 3</span></Nav.Link>
                            <Nav.Link as={Link} to="/615c01f62dfb8072f7431d6b"><span className="navSpan">Tricycle 4</span></Nav.Link>
                            <Nav.Link as={Link} to="/61547d82a1b6776152378f8e"><span className="navSpan">Tricycle ST</span></Nav.Link>
                            {lastBike?.name === 'Tricycle 4' ||
                                <>
                                    {lastBike && <Nav.Link as={Link} to={`/${lastBike._id}`}><span className="navSpan">{lastBike.name}</span></Nav.Link>}
                                </>
                            }
                        </Nav>

                        <Nav>
                            {props.loggedUser?.role === 'US' &&

                                <>
                                    <span className="nav-link iconCss scrollto" onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                    </svg> Logout</span>

                                    <Link className="nav-link iconCss scrollto" to="/perfil"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg> Mi perfil</Link>

                                    <Link className="nav-link iconCss scrollto cartIcon" to="/carrito" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                        <p className='length'>{products}</p>
                                    </Link>
                                </>

                            }

                            {props.loggedUser?.role === 'AD' &&
                                <>
                                    <span className="nav-link iconCss scrollto" onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                    </svg> Logout</span>

                                    <Link className="nav-link iconCss scrollto" to="/perfil"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg> Mi perfil</Link>
                                    <Link className="nav-link iconCss scrollto" to="/admin-panel"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-tools" viewBox="0 0 16 16">
                                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                                    </svg> Admin panel</Link>
                                </>
                            }
                            {props.loggedUser === null &&
                                <>
                                    <Link className="nav-link iconCss scrollto" to="/registro"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                    </svg> Registro</Link>
                                    <Link className="nav-link iconCss scrollto" to="/iniciar-sesion"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg> Iniciar sesi??n</Link>
                                </>
                            }


                        </Nav>


                    </Navbar.Collapse>

                </Container>

            </Navbar>
            {props.children && React.cloneElement(props.children, { refreshCart: totalProducts })}
        </>
    )

}
