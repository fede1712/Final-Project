import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import BillService from '../../../services/bill.service'
import CartService from '../../../services/cart.services'
import ShopService from '../../../services/shop.service'
import PaymentGateway from '../PaymentGateway/PaymentGateway'
import "./CompletePurchase.css"
import ImgPurchase from "./pasarela de pago.png"

export default class CompletePurchase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: undefined,
            shops: [],
            shop: '',
            disabled: true,
            totalPrice: 0

        }
        // const [bill, setBill] = useState(undefined)
        this.shopService = new ShopService()
        this.authService = new AuthService()
        this.billService = new BillService()
        this.cartService = new CartService()
    }

    componentDidMount() {
        this.findShops()
        this.findTotal()
    }

    findShops() {
        this.shopService.findShops()
            .then(res => {
                this.setState({
                    shops: res.data,
                    shop: res.data[0]._id
                })
            })
            .catch(err => console.error(err))
    }

    handleChange(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.state.status !== 200) {
            console.log('No completado')
        }
        else
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

    stripeSubmit = (res) => {
        console.log(res)
        this.setState({
            status: res.status,
            disabled: false
        })
    }

    findTotal() {
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


    render() {
        return (

            <div>

                <div>
                    <div className='payment'>

                        <div className="back-dark">
                            <div className='registro paymentBox justify-content-center'>
                                <div className="card reset-margin">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">

                                            <img src={ImgPurchase} className="card-img" alt={ImgPurchase} />
                                        </div>
                                        <div className="col-md-8 backColorForm">

                                            <div className="col-10">

                                                <h1>Introduce tus datos bancarios</h1>

                                                <PaymentGateway amount={this.state.totalPrice} stripeSubmit={this.stripeSubmit} />
                                                <p>Elige tu punto de entrega</p>
                                                <Form onSubmit={this.handleSubmit} >
                                                    <Form.Select name="shop" onChange={(e) => this.handleChange(e)} aria-label="Default select example">
                                                        {this.state.shops?.map((elm) =>
                                                            <option value={elm._id}>{elm.name}</option>
                                                        )}
                                                    </Form.Select>
                                                    <Button className="button-payment" variant="secondary" type='submit' disabled={this.state.disabled} onClick={(e) => this.handleSubmit(e)}>Finalizar compra</Button>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}