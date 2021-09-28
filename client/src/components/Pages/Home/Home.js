import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"

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
                            <div class="buyNow">
                                <a href="#">Compra ya tu Tricycle 4</a>
                            </div>
                        </Col>
                    </Row>

                </div>

            </section >

            <section class="prueba">
                <div >

                </div>
            </section>


        </div >

    )
}