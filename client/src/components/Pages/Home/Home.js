import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'

export default function Home(props) {

    return (

        <div>
            <section className="heroImg">

                <div >

                    <Row className="alingItems">
                        <Col md={{ span: 4, offset: 4 }}>
                            <div class="h1Css">
                                <h1>Tricycle 4</h1>
                                <h3>Un viaje suave y ágil.</h3>

                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-secondary buttonHero" variant="outline-secondary" to="/">Más información</Link>
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

            </section >

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

                            <div className="buyNow">
                                <Link className="buyButtomLink" to="/">Compra ya tu Tricycle 4 RS</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </Col>
                    </Row>

                </div>

            </section >

        </div >

    )
}