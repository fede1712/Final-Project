import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BillService from '../../../services/bill.service'
import './SalesDetails.css'

export default class SalesDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bill: undefined
        }
        this.billService = new BillService()
    }

    componentDidMount() {
        this.billService.findOneBill(this.props.match.params.id)
            .then(res => {
                console.log(res.data.bill)
                this.setState({
                    bill: res.data.bill
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container className='bills'>
                {this.state.bill ? (
                    <div id="app" class="col-11">
                        <h2>Factura</h2>
                        <h4>Fecha: {this.state.bill.date.toString().substring(0, 10)}</h4>
                        <hr />
                        <div class="row fact-info mt-3">
                            <div class="col-3">
                                <h5>Facturar a</h5>
                                <p>
                                    {this.state.bill.cartId.userId.userName}
                                </p>
                            </div>
                            <div class="col-3">
                                <h5>Enviar a</h5>
                                <p>{this.state.bill.shopId.name}</p>
                                <p>{this.state.bill.shopId.address.direction}</p>
                            </div>
                            <div class="col-3">
                                <h5>N° de factura</h5>
                                <h5>Fecha</h5>
                                <h5>Fecha de vencimiento</h5>
                            </div>
                            <div class="col-3">
                                <h5>103</h5>
                                <p>{this.state.bill.date.toString().substring(0, 10)}</p>
                                <p>{this.state.bill.date.toString().substring(0, 10)}</p>
                            </div>
                        </div>
                        <div class="row my-5">
                            <table class="table table-borderless factura">
                                <thead>
                                    <tr>
                                        <th>Cant.</th>
                                        <th>Producto</th>
                                        <th>Precio Unitario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.bill.cartId.products.map(elm =>
                                        <tr>
                                            <td>1</td>
                                            <td>{elm.name}</td>
                                            <td>{elm.price} €</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Total Factura: </th>
                                    <th>{ }</th>
                                </tr>
                            </tfoot>
                        </div>
                    </div>
                )
                    :
                    <p>...Cargando</p>
                }
            </Container>
        )
    }
}
