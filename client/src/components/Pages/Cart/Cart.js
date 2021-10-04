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

                {/* {this.state.products.length === 0 &&
                    <>
                        <Button as={Link} to={'/61547d68a1b6776152378f8c'} variant="primary">Descubre Tricycle 4</Button>
                    </>
                }
                {this.state.products.length > 0 &&
                    <>
                        {this.state.products?.map((elm, idx) =>
                            <Card key={elm._id + idx}>
                                <Card.Body>{elm.name}  </Card.Body>
                                <p>{elm.price} €</p>
                                <button onClick={() => this.pullOneProduct(elm._id)}>Eliminar</button>
                            </Card>
                        )}
                        <Button as={Link} to={'/comprar'} variant="primary">Pagar</Button>
                        <Button onClick={() => this.emptyshoppingcart()} variant="danger">Vaciar carro</Button>
                        <p>Total: {this.state.totalPrice} €</p>
                    </>
                } */}
                <Row>
                    {this.state.products.length === 0 &&
                        <Button as={Link} to={'/61547d68a1b6776152378f8c'} variant="primary">Descubre Tricycle 4</Button>
                    }
                    <Col >
                        {this.state.products.length > 0 &&
                            <div  >
                                {this.state.products?.map((elm, idx) =>
                                    <div className='cart-product' key={elm._id + idx}>
                                        <img className='image-cart' src={elm.imageModel} alt="" />
                                        <p>{elm.name}</p>
                                        <p >{elm.price} €</p>
                                        <button onClick={() => this.pullOneProduct(elm._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                        </svg></button>
                                    </div>
                                )}
                            </div>

                        }
                    </Col>
                    <Col className="total-price">
                        <p>Total: {this.state.totalPrice} €</p>
                        <Button as={Link} to={'/comprar'} variant="primary">Pagar</Button>
                        <Button onClick={() => this.emptyshoppingcart()} variant="danger">Vaciar carro</Button>
                    </Col>

                </Row>


            </Container>
        )
    }
}

