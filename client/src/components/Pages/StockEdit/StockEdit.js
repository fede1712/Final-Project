import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BikeService from '../../../services/bike.service'
import './StockEdit.css'

export default class StockEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
        }
        this.bikeService = new BikeService();
    }

    componentDidMount = () => {
        this.bikeService.findOneBike(this.props.match.params.id)
            .then(res => {
                const { quantity } = res.data.bike
                this.setState({
                    quantity,
                })
            })
            .catch(err => console.error(err))
    }

    handleChange = (e) => {
        const { value, name } = e.target;
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
                    quantity: 0,
                })
                this.props.history.push('/stock')
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className='edit-stock row'>

                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label>Stock: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="quantity" value={this.state.quantity} type="number" placeholder={this.state.quantity} />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Guardar
                </Button>
            </Form>
        )

    }
}