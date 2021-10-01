import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"
import imageCarousel1 from './carousel1.png'
import imageCarousel2 from './carousel2.png'
import imageCarousel3 from './carousel3.png'
import imageCarousel4 from './carousel4.png'
import imageCarousel5 from './carousel5.png'


export default function Home(props) {

    return (

        <div>
            <section className="heroImg">

                <div >

                    <Row className="alingItems">
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="h1Css">
                                <h1>Tricycle 4</h1>
                                <h3>Un viaje suave y ágil.</h3>

                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-secondary buttonHero" variant="outline-secondary" to="/">Más información</Link>
                            </div>

                            <div className="mouse_scroll">

                                <div className="mouse">
                                    <div className="wheel"></div>
                                </div>
                                <div>
                                    <span className="m_scroll_arrows unu"></span>
                                    <span className="m_scroll_arrows doi"></span>
                                    <span className="m_scroll_arrows trei"></span>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>

                            <div className="buyNow">
                                <Link className="buyButtomLink" to="/">Compra ya tu Tricycle 4</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </Col>
                    </Row>

                </div>

            </section>

            <section className="heroImg2">

                <div >

                    <Row className="alingItems">
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="h1Css">
                                <h1>Tricycle 4 RS</h1>
                                <h3>Un marco abierto para una mente abierta.</h3>

                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-secondary buttonHero2" variant="outline-secondary" to="/">Más información</Link>
                            </div>

                        </Col>
                        <Col md={12}>

                            <div className="buyNow2">
                                <Link className="buyButtomLink" to="/">Compra ya tu Tricycle 4 RS</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </Col>
                    </Row>

                </div>

            </section>



            <Carousel>
                <Carousel.Item className="carousel-text" interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>Icono del diseño</h3>
                        <p>Todos los detalles se suman al aspecto icónico de Tricycle para un nuevo estándar de rendimiento.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


            <div className="container-fluid section3">

                <Row xs="2">
                    <Col className="colSection3">
                        <div className="section3Img"></div>
                    </Col>
                    <Col className="colRightSection3 align-self-center">
                        <h1>Tricycle 3</h1>
                        <h3>La conducción más rápida de la ciudad obtiene una alta puntuación por su chasis deportivo y ágil.</h3>
                        <div className="d-flex justify-content-center">
                            <Link className="btn btn-secondary buttonSection3" variant="outline-secondary" to="/">Más información</Link>
                        </div>
                        <p>6 pagos sin comisiones o 1.990 €.<br /> Plazo de entrega 10 días.</p>
                    </Col>

                </Row>

            </div>

            <section className="paddingSection">

                <Row>

                    <Col className="col-md-7 section4">
                        <div>
                            <h1 className="section4h1"> Es un gran día para pasear.</h1>
                        </div>

                        <div >
                            <h3 className="section4h3">En el corazón de una Tricycle, está tu compañero de ruta. Conectado contigo y con cualquier camino que tomes.</h3>
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

            </section>

        </div>


    )
}