import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"

export default function Home(props) {

    return (

        <div>
            <section class="heroImg">

                <Row className="align-items-center">

                    <Col md={6}>
                        <h1>Tricycle 4</h1>
                        <div>
                            <a className="heroBotton" to="/">Más información</a>
                        </div>

                    </Col>

                </Row>

                {/* <img src={HeroImg} alt="Imagen del hero" /> */}
            </section>

        </div>

    )
}