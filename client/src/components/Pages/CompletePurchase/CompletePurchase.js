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
            shops: [],
            shop: ''
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
            .catch(err => console.log(err))
    }

    handleChange(e) {
        console.log(e.target.name, e.target.value)
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.cartService.buycart(this.state.shop)
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
                <Form onSubmit={this.handleSubmit} >
                    <Form.Select name="shop" onChange={(e) => this.handleChange(e)} aria-label="Default select example">
                        {this.state.shops?.map((elm) =>
                            <option defaultValue={elm._id[0]} value={elm._id}>{elm.name}</option>
                        )}
                    </Form.Select>
                    <Button variant="primary" type='submit' onClick={(e) => this.handleSubmit(e)}>Finalizar Compra</Button>
                </Form>
            </div >
        )
    }
}
