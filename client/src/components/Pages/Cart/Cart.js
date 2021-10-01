import React, { Component } from 'react'
import CartService from '../../../services/cart.services'
import UserService from '../../../services/user.services'
import AuthService from '../../../services/auth.service'
import './Cart.css'
import { Card, Button } from 'react-bootstrap'

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
        this.refreshCart()
    }

    refreshCart() {
        this.cartService.findCart()
            .then(res => {
                console.log(res.data.cart[0].products)
                this.setState({
                    products: res.data.cart[0].products
                })
                this.totalCount()
            })
            .catch(err => console.error(err))
    }

    totalCount() {
        let total = this.state.products.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price
        }, 0)
        this.setState({
            totalPrice: total
        })
        return total
    }

    pullOneProduct(id) {
        this.cartService.pullCart(id)
            .then(() => {
                this.refreshCart()
            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <div className='cart'>
                {this.state.products ?
                    (
                        <div>
                            {this.state.products?.map((elm, idx) =>
                                <Card key={elm._id + idx}>
                                    <Card.Body>{elm.name}  </Card.Body>
                                    <p>{elm.price} €</p>
                                    <button onClick={() => this.pullOneProduct(elm._id)}>Eliminar</button>
                                </Card>
                            )}
                        </div >
                    )
                    :
                    <p>...Cargando</p>
                }
                <p>Total: {this.state.totalPrice}</p>
            </div>
        )
    }
}
