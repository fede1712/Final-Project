import React, { Component } from 'react'
import CartService from '../../../services/cart.services'
import UserService from '../../../services/user.services'
import AuthService from '../../../services/auth.service'
import './Cart.css'
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShopService from '../../../services/shop.service'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            products: [],
            totalPrice: 0,
            shops: []
        }
        this.cartService = new CartService()
        this.userService = new UserService()
        this.authService = new AuthService()
        this.shopService = new ShopService()
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

    emptyshoppingcart() {
        this.cartService.emptyCart()
            .then(() => {
                this.refreshCart()
            })
            .catch(err => console.error(err))
    }

    findShops() {
        this.shopService.findShops()
            .then(res => {
                this.setState({
                    shops: res.data
                })
            })
    }


    render() {
        return (
            <Container className='cart'>
                <Row>
                    <Col>
                        <div className="checkout-info-list">
                            <h1 className="mb-3">CARRITO</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.length > 0 &&
                                        <tr>
                                            {this.state.products?.map((elm, idx) =>
                                                <div key={elm._id + idx}>
                                                    <td>
                                                        <div className="d-flex gap-3 align-items-center ">
                                                            <div>
                                                                <img className="cart-img" src={elm.imageModel} alt="cart-img" />
                                                                <button className='btn-delete' onClick={() => this.pullOneProduct(elm._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                                                </svg></button>
                                                            </div>
                                                            <div>
                                                                <span>{elm.name}</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span>{elm.price} €</span>
                                                    </td>
                                                </div>
                                            )}
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            {this.state.products.length === 0 &&
                                <Button as={Link} to={'/61547d68a1b6776152378f8c'} variant="primary">Descubre Tricycle 4</Button>
                            }
                        </div>
                    </Col>
                    <Col className="total-price">
                        <p>Total: {this.state.totalPrice} €</p>
                        <center><Button as={Link} to={'/comprar'} variant="primary">Pagar</Button></center>
                        <center><Button onClick={() => this.emptyshoppingcart()} variant="danger">Vaciar carro</Button></center>
                    </Col>
                </Row>
            </Container>
        )
    }
}

