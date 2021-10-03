import React, { Component } from 'react'
import BikeService from '../../../services/bike.service'
import CartService from '../../../services/cart.services';
import { Col, Row } from 'react-bootstrap';
import { Link, Button } from 'react-router-dom'
import "./Bike.css"
import Brake from "./freno-Tricycle.png"
import Pedal from "./pedal-Tricycle.png"

export default class Bike extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bike: null
        }
        this.bikeService = new BikeService()
        this.cartService = new CartService()
    }

    addBike(id) {
        this.cartService.pushCart(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    products: [res.data]
                })
            })
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.bikeService.findOneBike(this.props.match.params.bike)
            .then(res => {
                this.setState({
                    bike: res.data.bike
                })
            })
            .catch(err => console.error(err))
    }

    render() {

        return (
            <div>

                <section className="heroImgModel">

                    <div style={{ backgroundImage: `url(${this.state.bike?.imageHero})` }}>

                        <Row className="alingItems">
                            <Col md={{ span: 4, offset: 4 }}>

                                <div className="h1Css">
                                    <h4>{this.state.bike?.name}</h4>
                                    <h1>{this.state.bike?.subtitle}</h1>
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

                <section className="bikeSection2">
                    <div className="col-7">
                        <h2>{this.state.bike?.description}</h2>
                    </div>
                    <div>
                        <img src={this.state.bike?.imageModel} alt="" />
                    </div>
                </section>

                <section className="bikeSection3">
                    <div className="col-7">
                        <h2> El motor de una sola velocidad hace que cualquier trayecto se realice sin esfuerzo. No es necesario buscar otra marcha, la asistencia se pone en marcha de forma intuitiva. Levántate ante la ciudad y pedalea hacia un lugar sin límites.</h2>
                    </div>
                </section>

                <section className="bikeSection4">

                    <div className="col-12 marginSection4">
                        <h1 className="h1Size">Subida y escalada</h1>
                    </div>

                    <Row display-flex className="justify-content-between colPadding4">
                        <div className="col-3">
                            <h3>Asistencia</h3>
                            <div className="gradient"></div>
                            <p>Vaya con cuidado en las subidas, ya que la asistencia automática le proporciona una fuente de energía constante.</p>
                        </div>
                        <div className="col-3">
                            <h3>Batería extraíble</h3>
                            <div className="gradient"></div>
                            <p>Deja que la batería sea lo único que lleves dentro para cargarla. Recargada y lista para encajar en su sitio.</p>
                        </div>
                        <div className="col-3">
                            <h3>Carga inalambrica</h3>
                            <div className="gradient"></div>
                            <p>Una vez acoplado en el soporte, el teléfono está en estado de carga.</p>
                        </div>

                        <Row >
                            <div className="col-5">
                                <img className="imgBikeSection4details" src={Pedal} alt="Pedal" />
                            </div>

                            <div className="col-7">
                                <img className="imgBikeSection4details" src={Brake} alt="Maneta de freno" />
                            </div>
                        </Row>
                        <div className="col-8">
                            <h2 className="fontSec4Bike">
                                Acopla tu teléfono, cárgalo y la aplicación se sintoniza con la carretera como el único compañero que necesitas para mostrarte el camino. Llega rápido si tienes que hacerlo, o recorre más lejos si lo deseas. Tu batería no es la única con autonomía en este viaje. Tu mente también ha ganado su libertad.
                            </h2>
                        </div>
                        <div className="col-12 marginSection4">
                            <h1 className="h1Size">Ride Awake</h1>
                        </div>
                    </Row>

                </section>
            </div>


        )

    }

}



            // <div className="accordion-body">
            //     <div className="accordion">
            //         <h1>Frequently Asked Questions</h1>
            //         {/* <hr> */}
            //         <div className="container">
            //             <div className="label">What is HTML</div>
            //             <div className="content">Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.</div>
            //         </div>
            //     </div>

            // </div>
    //         <div>
    //             <section className="heroImg" style={{ backgroundImage: `url(${this.state.bike?.imageHero})` }}>
    //                 <div >
    //                     <Row className="alingItems1">
    //                         <Col md={{ span: 4, offset: 4 }}>
    //                             <div className="h1Css">
    //                                 <h3>{this.state.bike?.name}</h3>
    //                                 <h1>{this.state.bike?.subtitle}</h1>
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                 </div >
    //             </section>
    //             <section>
    //                 <h5>{this.state.bike?.description}</h5>
    //             </section>
    //             <button onClick={() => this.addBike(this.state.bike?._id)}>Añadir</button>
    //         </div>
    //         /* 
    //                 <Container>
    //                     {

    //                         this.state.bike? ?

    //                             <Row>
    //                                 <Col md={6}>
    // h1>{this.state.bike?.description}</h1>
    //                                     <h1>{this.state.bike?.name}</h1>
    //                                     <h3>{this.state.bike?.description}</h3>

    //                                     <img src={this.state.bike?.imageModel} alt={this.state.bike?.name}></img>
    //                                     <img src={this.state.bike?.imageDetail} alt={this.state.bike?.name}></img>
    //                                     <img src={this.state.bike?.imageHero} alt={this.state.bike?.name}></img>
    //                                     <hr />
    //                                     <p>Precio: {this.state.bike?.price} €</p>
    //                                     <p>Alcance de la batería: 	Autonomía de hasta {this.state.bike?.specifications.batteryRange}  km</p>
    //                                     <p>Velocidad de asistencia: {this.state.bike?.specifications.assistSpeed} km/h</p>
    //                                     <p>Motor: {this.state.bike?.specifications.motor}</p>
    //                                     <p>Batería: {this.state.bike?.specifications.battery}</p>

    //                                     <hr />

    //                                 </Col>
    //                                 <Col md={4}>
    //                                 </Col>
    //                             </Row>

    //                             :
    //                             <h3>Cargando...</h3>

    //                     }
    //                 </Container> */
