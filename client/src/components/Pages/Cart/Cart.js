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
                        {this.state.products.length === 0 ||
                            <div class="px-4 px-lg-0">
                                <div class="pb-5">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                                                <div class="table-responsive">
                                                    <table class="table">
                                                        <thead>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <div class="p-2 px-3 text-uppercase">Producto</div>
                                                                </div>

                                                                <div class="col-8">
                                                                    <div class="py-2 text-uppercase">Descripción</div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="py-2 text-uppercase">Precio</div>
                                                                </div>

                                                                <div class="col">
                                                                    <div class="py-2 text-uppercase"></div>
                                                                </div>

                                                            </div>
                                                            {/* <tr>
                                                                <th scope="col" class="border-0 bg-light">
                                                                    <div class="p-2 px-3 text-uppercase">Producto</div>
                                                                </th>
                                                                <th scope="col" class="border-0 bg-light">
                                                                    <div class="py-2 text-uppercase">Precio</div>
                                                                </th>
                                                                <th scope="col" class="border-0 bg-light">
                                                                    <div class="py-2 text-uppercase">Eliminar</div>
                                                                </th>
                                                            </tr> */}
                                                        </thead>

                                                        <tbody>
                                                            {this.state.products.length > 0 &&
                                                                <tr>
                                                                    {this.state.products?.map((elm, idx) =>
                                                                        <div key={elm._id + idx}>


                                                                            <div class="row">

                                                                                <div class="col">
                                                                                    <img src={elm.imageModel} alt={elm.imageModel} width="70" class="img-fluid rounded shadow-sm" />

                                                                                </div>

                                                                                <div class="col-8">
                                                                                    <h5 class="mb-0"> <p href="#" class="text-dark d-inline-block align-middle">{elm.name}</p></h5><span class="text-muted font-weight-normal font-italic d-block"></span>

                                                                                </div>

                                                                                <div class="col">
                                                                                    <td class="border-0 align-middle"><strong>{elm.price} €</strong></td>
                                                                                </div>

                                                                                <div class="col">
                                                                                    <button className='btn-delete' onClick={() => this.pullOneProduct(elm._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                                                                    </svg></button>
                                                                                </div>

                                                                            </div>
                                                                            {/* <th scope="row" class="border-0">
                                                                                <div class="p-2">
                                                                                    <img src={elm.imageModel} alt={elm.imageModel} width="70" class="img-fluid rounded shadow-sm" />
                                                                                    <div class="ml-3 d-inline-block align-middle">

                                                                                        <h5 class="mb-0"> <p href="#" class="text-dark d-inline-block align-middle">{elm.name}</p></h5><span class="text-muted font-weight-normal font-italic d-block"></span>

                                                                                    </div>

                                                                                </div>
                                                                                <button className='btn-delete' onClick={() => this.pullOneProduct(elm._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                                                                </svg></button>
                                                                            </th> */}

                                                                            {/* <td class="border-0 align-middle"><strong>{elm.price} €</strong></td> */}

                                                                        </div>
                                                                    )}

                                                                </tr>
                                                            }
                                                        </tbody>

                                                    </table>
                                                    <div class="col-lg-6">
                                                        <div class="p-4">

                                                            <ul class="list-unstyled mb-4">
                                                                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                                                    <h5 class="font-weight-bold">{this.state.totalPrice} €</h5>
                                                                </li>
                                                            </ul>


                                                            <Button className="btn btn-dark rounded-pill py-2 btn-block" as={Link} to={'/comprar'} variant="secondary">Pagar</Button>
                                                            <Button className="btn btn-danger rounded-pill py-2 btn-block" onClick={() => this.emptyshoppingcart()} variant="danger">Vaciar carro</Button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>



                        }

                        {this.state.products.length === 0 &&
                            <div className="buyNow">
                                <Link as={Link} className="buyButtomLink" to={'/61547d68a1b6776152378f8c'}>Compra ya tu Tricycle</Link >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        }

                    </Col>
                </Row>
            </Container>

        )
    }
}

