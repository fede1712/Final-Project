import React, { Component } from 'react'
import CartService from '../../../services/cart.services'
import UserService from '../../../services/user.services'
import AuthService from '../../../services/auth.service'
import './Cart.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
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
                    products: res.data.cart.products
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
                this.props.refreshCart()
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
            <>
                <Container className='cart'>

                    <Row>
                        <Col>
                            {this.state.products.length === 0 ||
                                <div className="px-4 px-lg-0">
                                    <div className="pb-5">
                                        <div className="container">
                                            <div className="row cart-padding">
                                                <div className="col-lg-12 bg-white rounded shadow-sm mb-5">
                                                    <div >
                                                        <br />
                                                        <br />
                                                        <h2>Cesta de la compra</h2>
                                                        <br />
                                                        <table className="table">

                                                            <thead>
                                                                <div className="row bg-dark justify-content-lg-center">
                                                                    <div className="col">
                                                                        <div className="p-2 px-3 text-uppercase justify-content-lg-center colorHead">Producto</div>
                                                                    </div>

                                                                    <div className="col-7">
                                                                        <div className="py-2 text-uppercase justify-content-lg-center colorHead">Descripción</div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="py-2 text-uppercase justify-content-lg-center colorHead">Precio</div>
                                                                    </div>

                                                                    <div className="col">
                                                                        <div className="py-2 text-uppercase justify-content-lg-center colorHead">Eliminar</div>
                                                                    </div>
                                                                </div>

                                                            </thead>

                                                            <tbody>
                                                                {this.state.products.length > 0 &&
                                                                    <tr>
                                                                        {this.state.products?.map((elm, idx) =>
                                                                            <div key={elm._id + idx}>


                                                                                <div className="row border-bottom colCart">

                                                                                    <div className="col justify-content-lg-center">
                                                                                        <img src={elm.imageModel} alt={elm.imageModel} width="300" class="img-fluid rounded shadow-sm" />

                                                                                    </div>

                                                                                    <div className="col-7 justify-content-lg-center text-muted">
                                                                                        <h5 className="mb-0"> <p href="#" class="text-dark d-inline-block align-middle">{elm.name}</p></h5><span class="text-muted font-weight-normal font-italic d-block"></span>

                                                                                    </div>

                                                                                    <div className="col justify-content-lg-center">
                                                                                        <td className="border-0 align-middle" ><strong>{elm.price} €</strong></td>
                                                                                    </div>

                                                                                    <div className="col ">
                                                                                        <button className='btn-delete' onClick={() => this.pullOneProduct(elm._id)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                                        </svg></button>

                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        )}

                                                                    </tr>
                                                                }
                                                            </tbody>

                                                        </table>
                                                        <div className=" col-12 flex-row-reverse">
                                                            <div className="p-4">

                                                                <ul className="list-unstyled mb-4">
                                                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                                                        <h5 className="font-weight-bold">{this.state.totalPrice} €</h5>
                                                                    </li>
                                                                </ul>


                                                                <Button className="btn btn-seconday rounded-pill py-2 btn-block button-cart" as={Link} to={'/comprar'} variant="secondary">Pagar</Button>
                                                                <Button className="btn btn-secondary rounded-pill py-2 btn-block button-cart button-cart-margin" onClick={() => this.emptyshoppingcart()} variant="secondary">Vaciar carro</Button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            }

                        </Col>
                    </Row>
                </Container>

                {
                    this.state.products.length === 0 &&

                    <section className="cartImg">

                        <div >

                            <Row className="alingItems">
                                <div>
                                    <div>
                                        <h1>Unete al movimiento Trycycle</h1>
                                        <div className="d-flex justify-content-center">
                                            <h3 className="cartImghH3">Descubre nuestra gama de bicicletas</h3>

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-secondary buttoncartImg" variant="outline-secondary" to="/">Más información</Link>
                                    </div>
                                </div>

                            </Row>

                        </div>

                    </section>

                }
            </>
        )
    }
}

