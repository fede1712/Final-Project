import React, { Component } from 'react'
import BikeService from '../../../services/bike.service'
import CartService from '../../../services/cart.services';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./Bike.css"
import Brake from "./freno-Tricycle.png"
import BikeColor1 from "./bikes_tricycle_1.png"
import BikeColor2 from "./bikes_tricycle_2.png"
import BikeColor3 from "./bikes_tricycle_3.png"
import Find1 from "./busca-bici1.png"
import Find2 from "./busca-bici2.png"
import Detection1 from "./deteccion-1.jpg"
import Detection2 from "./deteccion-2.png"
import Light1 from "./luces-1.jpg"
import Light2 from "./luz-2.png"
import Details1 from "./details-1.png"
import Details2 from "./details-2.png"
import Details3 from "./details-3.png"
import Details4 from "./details-4.png"
import Details5 from "./details-5.png"
import Details6 from "./details-6.png"
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



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

    refreshBike() {
        this.bikeService.findOneBike(this.props.match.params.bike)
            .then(res => {
                this.setState({
                    bike: res.data.bike
                })
            })
            .catch(err => console.error(err))
    }


    changeImage(e) {

        e.stopPropagation()

        let id = !e.target.id ? e.target.parentNode.id : e.target.id

        let content1 = document.getElementById("contenido1").firstChild

        let content2 = document.getElementById("contenido2").firstChild

        if (id === "columnSeguriy1") {
            content1.src = Find1
            content2.src = Find2
        } else if (id === "columnSeguriy2") {
            content1.src = Detection1
            content2.src = Detection2
        } else if (id === "columnSeguriy3") {
            content1.src = Light1
            content2.src = Light2
        }

    }

    changeImageColor(e) {

        e.stopPropagation()

        let id = !e.target.id ? e.target.parentNode.id : e.target.id

        let contentColor1 = document.getElementById("totalcolors").firstChild

        if (id === "bikeColor1") {
            contentColor1.src = BikeColor1
        } else if (id === "bikeColor2") {
            contentColor1.src = BikeColor2
        } else if (id === "bikeColor3") {
            contentColor1.src = BikeColor3
        }

    }


    componentDidMount() {
        this.refreshBike()
    }

    componentDidUpdate(preProps) {
        if (preProps.match.params.bike !== this.props.match.params.bike) {
            this.refreshBike()
        }
    }

    render() {

        return (

            <div>

                <section className="heroImgModel">

                    <div style={{ backgroundImage: `url(${this.state.bike?.imageHero})`, background: `no-repeat center/100% 100% cover url(${this.state.bike?.imageHero})` }}>

                        <Row className="alingItemsBike">
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
                                    <span as={Link} className="buyButtomLink" onClick={() => {
                                        this.addBike(this.state.bike?._id)
                                        this.props.refreshCart()
                                        console.log('holi')
                                    }}>Compra ya tu Tricycle 4</span>
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
                    <div className="imgModelSizeContainer">
                        <img className="imgModelSize" src={this.state.bike?.imageModel} alt="" />
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
                            <p>Deja que la batería sea lo único que lleves dentro para cargarla.Recargada y lista para encajar en su sitio.</p>
                        </div>
                        <div className="col-3">
                            <h3>Carga inalambrica</h3>
                            <div className="gradient"></div>
                            <p>Una vez acoplado en el soporte, el teléfono está en estado de carga.</p>
                        </div>

                        <Row >
                            <div className="col-5">
                                <img className="imgBikeSection4details" src={this.state.bike?.imageDetail} alt="Pedal" />
                            </div>

                            <div className="col-7">
                                <img className="imgBikeSection4details" src={Brake} alt="Maneta de freno" />
                            </div>
                        </Row>

                        <div className="col-8">
                            <h2 className="fontSec4Bike">
                                Acopla tu teléfono, cárgalo y la aplicación se sintoniza con la carretera como el único compañero que necesitas para mostrarte el camino.Llega rápido si tienes que hacerlo, o recorre más lejos si lo deseas.Tu batería no es la única con autonomía en este viaje.Tu mente también ha ganado su libertad.
                            </h2>
                        </div>
                        <div className="col-12 marginSection4">

                            <h1 className="h1Size">Ride Awake</h1>

                        </div>

                    </Row>
                </section>

                <section>
                    <div className="sectionSecurity">
                        <h1>Seguridad</h1>

                        <Row className="justify-content-center">

                            <div class="row mb-3 securityColums">

                                <div onClick={this.changeImage} id="columnSeguriy1" className="col-4 linkopacity">
                                    <h4>Detección de robo</h4>
                                    <hr />
                                    <p>Reciba una alerta si alguien intenta robarle su bicicleta, con seguimiento en tiempo real para ayudarlo a recuperarla.</p>
                                </div>

                                <div onClick={this.changeImage} id="columnSeguriy2" className="col-4 linkopacity">
                                    <h4>Detección de accidentes</h4>
                                    <hr />
                                    <p>Los sensores integrados detectan una caída y hablan con la aplicación para alertar a sus contactos de emergencia.</p>
                                </div>

                                <div onClick={this.changeImage} id="columnSeguriy3" className="col-4 linkopacity">
                                    <h4>Luces integradas</h4>
                                    <hr />
                                    <p>Las luces integradas en el marco le brindan visibilidad siempre encendida de día y de noche.</p>
                                </div>

                            </div>

                            <Row >


                                <div className="col-5" id="contenido1">
                                    <img className="imgBikeSection4details" src={Find1} alt="Pedal" />
                                </div>

                                <div className="col-7" id="contenido2">
                                    <img className="imgBikeSection4details" src={Find2} alt="Maneta de freno" />
                                </div>


                            </Row>

                        </Row>

                    </div>
                </section>

                <section>
                    <div className="sectionSecurity">
                        <h1>Detalles</h1>

                        <Row className="justify-content-center">

                            <div class="row mb-3 securityColums">

                                <div className="col-4 detailsColum linkopacityDetails" >
                                    <img src={Details1} alt={Details1} />
                                    <h4>Desbloqueo automático</h4>
                                    <hr />
                                    <p>La aplicación detecta cuándo estás cerca para desbloquearlo automáticamente.</p>
                                </div>

                                <div className="col-4 detailsColum linkopacityDetails">
                                    <img src={Details2} alt={Details2} />
                                    <h4>Frenos de disco hidráulicos</h4>
                                    <hr />
                                    <p>Frenos con potencia de frenado total en el momento en que hace contacto.</p>
                                </div>

                                <div className="col-4 detailsColum linkopacityDetails">
                                    <img src={Details3} alt={Details3} />
                                    <h4>Neumáticos resistentes</h4>
                                    <hr />
                                    <p>Neumáticos todoterreno con agarre flexible y una capa resistente a los pinchazos.</p>
                                </div>

                                <div className="col-4 detailsColum linkopacityDetails" >
                                    <img src={Details4} alt={Details4} />
                                    <h4>Encuentra mi bicicleta</h4>
                                    <hr />
                                    <p>Rastreo GPS para que sepa dónde está su bicicleta y pueda rastrearla en cualquier momento.</p>
                                </div>

                                <div className="col-4 detailsColum linkopacityDetails">
                                    <img src={Details5} alt={Details5} />
                                    <h4>Distancia</h4>
                                    <hr />
                                    <p>La batería extraíble tiene una autonomía de batería de hasta 70 km y pesa solo 2,4 kg.</p>
                                </div>

                                <div className="col-4 detailsColum linkopacityDetails">
                                    <img src={Details6} alt={Details6} />
                                    <h4>Ligera</h4>
                                    <hr />
                                    <p>Un viaje ágil que pesa solo 18,9 kg lo hace versátil para la vida en la ciudad.</p>
                                </div>


                            </div>
                        </Row>

                    </div>
                </section>

                <section className="accordionCss row justify-content-center">

                    <div className="col-11">

                        <div class="tab colorBackAccordion">
                            <input className="input-acordion" type="checkbox" id="chck1" />

                            <label className="tab-label" for="chck1"><h4>Especificaciones generales</h4></label>
                            <hr />
                            <div class="container tab-content">

                                <div class="row tab">
                                    <input className="input-acordion" type="checkbox" id="chck1" />
                                    <div class="col-md-11" for="chck1">
                                        <div class="row">
                                            <div class="col-md-6"><p>Precio</p></div>
                                            <div class="col-md-6"><p>{this.state.bike?.price} €</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Colores</p></div>
                                            <div class="col-md-6"><p>Negro, Caqui, Arena</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>La altura del ciclista</p></div>
                                            <div class="col-md-6"><p>Optimizado para ciclistas entre 170-195 cm de altura</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Peso</p></div>
                                            <div class="col-md-6"><p>18,9 kg de peso total, incluida la batería</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Alcance de la batería</p></div>
                                            <div class="col-md-6"><p>Autonomía de hasta {this.state.bike?.specifications.batteryRange} km</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Tiempo de carga</p></div>
                                            <div class="col-md-6"><p>100% recargado en 3h20min</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Velocidad de asistencia</p></div>
                                            <div class="col-md-6"><p>{this.state.bike?.specifications.assistSpeed} km/h</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Garantía</p></div>
                                            <div class="col-md-6"><p>2 años</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Modo de control</p></div>
                                            <div class="col-md-6"><p>Teléfono conectado con aplicación + desbloqueo de batería</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab">
                            <input className="input-acordion" type="checkbox" id="chck2" />

                            <label className="tab-label" for="chck2"><h4>Bicicleta </h4></label>
                            <hr />
                            <div class="container tab-content">

                                <div class="row tab colorBackAccordion">
                                    <input className="input-acordion" type="checkbox" id="chck2" />
                                    <div class="col-md-11" for="chck2">
                                        <div class="row">
                                            <div class="col-md-6"><p>Cuadro</p></div>
                                            <div class="col-md-6"><p>Aluminio 6061</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Horquilla</p></div>
                                            <div class="col-md-6"><p>Aluminio 6061</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Transmisión</p></div>
                                            <div class="col-md-6"><p>Correa de carbono Gates, relación de transmisión 60/21 (2,85).</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Piñones</p></div>
                                            <div class="col-md-6"><p>60 dientes delanteros y 21 traseros</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Manillar</p></div>
                                            <div class="col-md-6"><p>540 mm de ancho, barrido de 7 grados, aumento de 0 mm</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Frenos</p></div>
                                            <div class="col-md-6"><p>Tricycle personalizado.</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Llantas</p></div>
                                            <div class="col-md-6"><p>Neumáticos personalizados Cowboy de 44 mm, neumáticos resistentes a los pinchazos con un agarre flexible y una capa de protección contra pinchazos</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab">
                            <input className="input-acordion" type="checkbox" id="chck3" />

                            <label className="tab-label" for="chck3"><h4>Electrónica</h4></label>
                            <hr />
                            <div class="container tab-content">

                                <div class="row tab colorBackAccordion">
                                    <input className="input-acordion" type="checkbox" id="chck3" />
                                    <div class="col-md-11" for="chck3">
                                        <div class="row">
                                            <div class="col-md-6"><p>Motor</p></div>
                                            <div class="col-md-6"><p>{this.state.bike?.specifications.motor}</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Conectividad</p></div>
                                            <div class="col-md-6"><p>Bluetooth de baja energía</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Batería</p></div>
                                            <div class="col-md-6"><p>{this.state.bike?.specifications.battery}</p></div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-6"><p>Cargador</p></div>
                                            <div class="col-md-6"><p>Cargador de 36 V / 4 A de diseño personalizado</p></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>

                <section className="colorBikesChange">
                    <div>
                        <h1>Elige el color de tu Trycicle</h1>

                        <Row className="justify-content-center">

                            <Col xs={2} className="backBoton">

                                <Row className="justify-content-center">
                                    <Col xs={12} className='row justify-content-center'>

                                        <div onClick={this.changeImageColor} id="bikeColor1" className="col-4 boton1"><a></a></div>

                                        <div onClick={this.changeImageColor} id="bikeColor2" className="col-4 boton2"><a></a></div>

                                        <div onClick={this.changeImageColor} id="bikeColor3" className="col-4 boton3"><a></a></div>

                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={12} id="totalcolors" className='row justify-content-center align-center'>
                                <img className="imgBikeSection4details" src={BikeColor1} alt={BikeColor1} />
                            </Col>

                        </Row>

                    </div>
                </section>

                <Col md={12}>

                    <div className="buyNow">
                        <Link className="buyButtomLink" to="/">Compra ya tu {this.state.bike?.name}</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </div>
                </Col>

            </div>


        )

    }

}
