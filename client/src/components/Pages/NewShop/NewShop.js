import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import ShopsService from '../../../services/shop.service'
import './NewShop.css'

export default class NewShop extends Component {

    state = {
        name: "",
        description: "",
        address: {
            coordinates: [],
            direction: ""
        }
    }
    shopService = new ShopsService();


    handleChange = (e) => {
        const { value, name } = e.target;

        name === 'address' ? this.setState({
            address: {
                ...this.state.address,
                direction: value
            }
        })
            :
            this.setState({
                [name]: value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.shopService.createShop(this.state)
            .then(() => {
                this.setState({
                    name: "",
                    description: "",
                    address: ""
                })
                console.log(this.props)
                this.props.history.push('/lista-tiendas')
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className='new-shop row'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre de la tienda: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Introduce título" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Introduce descripción" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="address" value={this.state.address.direction} type="text" placeholder="Introduce dirección" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear
                </Button>
            </Form>
        )
    }
}