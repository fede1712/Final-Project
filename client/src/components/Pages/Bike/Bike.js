import React, { Component } from 'react'
import BikeService from '../../../services/bike.service'
import CartService from '../../../services/cart.services';
import { Col, Row } from 'react-bootstrap';
import { Link, Button } from 'react-router-dom'
import "./Bike.css"

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
                <section className="heroImg" style={{ backgroundImage: `url(${this.state.bike?.imageHero})` }}>
                    <div >
                        <Row className="alingItems1">
                            <Col md={{ span: 4, offset: 4 }}>
                                <div className="h1Css">
                                    <h3>{this.state.bike?.name}</h3>
                                    <h1>{this.state.bike?.subtitle}</h1>
                                </div>
                            </Col>
                        </Row>
                    </div >
                </section>
                <section>
                    <h5>{this.state.bike?.description}</h5>
                </section>
                <button onClick={() => this.addBike(this.state.bike?._id)}>Añadir</button>
            </div>
            /* 
                    <Container>
                        {
    
                            this.state.bike? ?
    
                                <Row>
                                    <Col md={6}>
    h1>{this.state.bike?.description}</h1>
                                        <h1>{this.state.bike?.name}</h1>
                                        <h3>{this.state.bike?.description}</h3>
    
                                        <img src={this.state.bike?.imageModel} alt={this.state.bike?.name}></img>
                                        <img src={this.state.bike?.imageDetail} alt={this.state.bike?.name}></img>
                                        <img src={this.state.bike?.imageHero} alt={this.state.bike?.name}></img>
                                        <hr />
                                        <p>Precio: {this.state.bike?.price} €</p>
                                        <p>Alcance de la batería: 	Autonomía de hasta {this.state.bike?.specifications.batteryRange}  km</p>
                                        <p>Velocidad de asistencia: {this.state.bike?.specifications.assistSpeed} km/h</p>
                                        <p>Motor: {this.state.bike?.specifications.motor}</p>
                                        <p>Batería: {this.state.bike?.specifications.battery}</p>
    
                                        <hr />
    
                                    </Col>
                                    <Col md={4}>
                                    </Col>
                                </Row>
    
                                :
                                <h3>Cargando...</h3>
    
                        }
                    </Container> */



        )

    }

}
