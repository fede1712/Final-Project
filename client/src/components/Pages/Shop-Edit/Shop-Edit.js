import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import ShopsService from '../../../services/shop.service'

export default class ShopEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            address: {
                direction: '',
                coordinates: []
            }
        }
        this.shopService = new ShopsService();
    }


    componentDidMount = () => {
        this.shopService.findOneShop(this.props.match.params.id)
            .then(res => {
                const { name, description, address } = res.data
                this.setState({
                    name,
                    description,
                    address
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {

        const { value, name } = e.target;

        name === 'address' ?
            this.setState({
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
        console.log(this.props.match.params.id)

        this.shopService.editShop(this.state, this.props.match.params.id)

            .then(() => {
                this.setState({
                    name: "",
                    description: "",
                    address: ""
                })

                this.props.history.push('/lista-tiendas')
            })
            .catch(err => console.error(err))
    }

    render() {

        return (

            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre de la tienda: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder={this.state.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder={this.state.description} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="address" value={this.state.address.direction} type="text" placeholder={this.state.address} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        )

    }
}