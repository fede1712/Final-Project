import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BikeService from '../../../services/bike.service'
import './NewBike.css'

export default class NewBike extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            subtitle: "",
            description: "",
            imageModel: "",
            imageDetail: "",
            imageHero: "",
            price: 0,
            quantity: 0,
            specifications: {
                batteryRange: 0,
                assistSpeed: 0,
                motor: "",
                battery: ""
            }
        }
        this.bikeService = new BikeService()
    }



    handleChange = (e) => {
        const { value, name } = e.target;
        name === 'batteryRange' || name === 'assistSpeed' || name === 'motor' || name === 'battery' ?
            this.setState({
                specifications: {
                    ...this.state.specifications,
                    [name]: value
                }
            })
            :
            this.setState({
                ...this.state,
                [name]: value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.bikeService.createBike(this.state)
            .then(() => {
                this.setState({
                    name: "",
                    subtitle: "",
                    description: "",
                    imageModel: "",
                    imageDetail: "",
                    imageHero: "",
                    price: 0,
                    quantity: 0,
                    specifications: {
                        batteryRange: 0,
                        assistSpeed: 0,
                        motor: "",
                        battery: ""
                    }
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className='new-bike'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Introduce nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subtitle">
                    <Form.Label>Subtitulo: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="subtitle" value={this.state.subtitle} type="text" placeholder="Introduce subtítulo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Introduce descripción" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="price" value={this.state.price} type="number" placeholder="Introduce precio" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label>Stock: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="quantity" value={this.state.quantity} type="number" placeholder="Introduce stock" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageModel">
                    <Form.Label>Imagen modelo: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageModel" value={this.state.imageModel} type="text" placeholder="Introduce imagen modelo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageDetail">
                    <Form.Label>Imagen detalles: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageDetail" value={this.state.imageDetail} type="text" placeholder="Introduce imagen de detalles" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageHero">
                    <Form.Label>Imagen hero: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageHero" value={this.state.imageHero} type="text" placeholder="Introduce imagen hero" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="batteryRange">
                    <Form.Label>Rango de batería: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="batteryRange" value={this.state.specifications.batteryRange} type="number" placeholder="Introduce rango de batería" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="assistSpeed">
                    <Form.Label>Velocidad maxima: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="assistSpeed" value={this.state.specifications.assistSpeed} type="number" placeholder="Introduce velocidad máxima" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="motor">
                    <Form.Label>Motor: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="motor" value={this.state.specifications.motor} type="text" placeholder="Introduce motor" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="battery">
                    <Form.Label>Batería: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="battery" value={this.state.specifications.battery} type="text" placeholder="Introduce batería" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

}
