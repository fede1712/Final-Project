import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import BillService from '../../../services/bill.service'
import CartService from '../../../services/cart.services'
import ShopService from '../../../services/shop.service'
import UserService from '../../../services/user.services'

export default class CompletePurchase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: undefined,
            shops: []
        }

        this.shopService = new ShopService()
        this.authService = new AuthService()
        this.billService = new BillService()
        this.cartService = new CartService()
    }
    componentDidMount() {
        this.findShops()

    }

    findShops() {
        this.shopService.findShops()
            .then(res => {
                this.setState({
                    shops: res.data
                })
            })
    }
    handleChange(e) {
        const { value, name } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.cartService.buycart()
            .then(res => {
                this.setState({
                    bill: res.data,
                    shops: []
                })
                this.props.history.push('/')
            })
            .catch(err => console.error(err))
    }


    // payment() {
    //     this.cartService.buycart()
    //         .then(res => {
    //             this.setState({
    //                 bill: res.data,
    //                 shop: ''
    //             })
    //         })
    // }



    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />

                <h1>Pasarela de pago</h1>
                <Form.Select onSubmit={this.handleSubmit} aria-label="Default select example">

                    {this.state.shops?.map((elm) =>
                        <option onChange={(e) => this.handleChange(e)} name="shop" value={elm.name}>{elm.name}</option>
                    )}
                </Form.Select>
                <Button variant="primary" type='submit' onClick={(e) => this.handleSubmit(e)}>Finalizar Compra</Button>




            </div >
        )
    }
}
