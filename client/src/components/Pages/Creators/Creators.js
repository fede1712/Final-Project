import React from 'react';
import { Row } from 'react-bootstrap'
import './Creators.css'
import { Link } from 'react-router-dom'


export default function Creators() {



    return (
        <section className="heroFounders">
            <Row className="alingItems">

                <div>
                    <h1>Los Co founders</h1>
                    <h3 className=" heroImghH3">Queremos dar las gracias a todos los que nos habeis acompañado en este viaje <br /> tan emocionante, el cual jamas olvidaremos...  ¡FUEGOTE! 🚀 😘 </h3>
                    <div className=" col8 d-flex justify-content-center">
                        <Link className="btn btn-secondary buttonHero" variant="outline-secondary" to="/creadores-img">Mostrar imagen</Link>
                    </div>

                </div>

            </Row>
        </section>
    )
}
