import React, { Component } from 'react'
import CartService from '../../../services/cart.services'
import UserService from '../../../services/user.services'
import AuthService from '../../../services/auth.service'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            products: [],
            totalPrice: 0
        }
        this.cartService = new CartService()
        this.userService = new UserService()
        this.authService = new AuthService()
    }

    componentDidMount() {

    }


    render() {

        return (
            <div>
                <h1>Hola{ }</h1>

            </div>
        )
    }
}
