import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BikeService from '../../../services/bike.service'

export default class BikeEdit extends Component {
    constructor(props) {
        super(props)

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
        this.bikeService = new BikeService();
    }

    componentDidMount = () => {
        this.bikeService.findOneBike(this.props.match.params.id)
            .then(res => {
                const { name, subtitle, description, imageModel, imageDetail, imageHero, price, quantity, specifications } = res.data.bike
                this.setState({
                    name,
                    subtitle,
                    description,
                    imageModel,
                    imageDetail,
                    imageHero,
                    price,
                    quantity,
                    specifications
                })
            })
            .catch(err => console.log(err))
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

        this.bikeService.editBike(this.state, this.props.match.params.id)

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
                this.props.history.push('/lista-bicis')
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className='edit-bike'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder={this.state.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subtitle">
                    <Form.Label>Subtitulo: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="subtitle" value={this.state.subtitle} type="text" placeholder={this.state.subtitle} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder={this.state.description} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="price" value={this.state.price} type="number" placeholder={this.state.price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label>Stock: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="quantity" value={this.state.quantity} type="number" placeholder={this.state.quantity} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageModel">
                    <Form.Label>Imagen modelo: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageModel" value={this.state.imageModel} type="text" placeholder={this.state.imageModel} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageDetail">
                    <Form.Label>Imagen detalles: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageDetail" value={this.state.imageDetail} type="text" placeholder={this.state.imageDetail} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imageHero">
                    <Form.Label>Imagen hero: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageHero" value={this.state.imageHero} type="text" placeholder={this.state.imageHero} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="batteryRange">
                    <Form.Label>Rango de batería: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="batteryRange" value={this.state.specifications.batteryRange} type="number" placeholder={this.state.specifications.batteryRange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="assistSpeed">
                    <Form.Label>Velocidad maxima: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="assistSpeed" value={this.state.specifications.assistSpeed} type="number" placeholder={this.state.specifications.assistSpeed} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="motor">
                    <Form.Label>Motor: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="motor" value={this.state.specifications.motor} type="text" placeholder={this.state.specifications.motor} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="battery">
                    <Form.Label>Batería: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="battery" value={this.state.specifications.battery} type="text" placeholder={this.state.specifications.battery} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        )

    }
}