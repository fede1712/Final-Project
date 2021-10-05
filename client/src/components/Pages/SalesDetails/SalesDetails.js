import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BillService from '../../../services/bill.service'
import './SalesDetails.css'

export default class SalesDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bill: undefined,
            totalPrices: []
        }
        this.billService = new BillService()
    }

    componentDidMount() {
        this.refreshBills()
    }

    refreshBills() {
        this.billService.findOneBill(this.props.match.params.id)

        let pop = res => res.data.bill.products.map(elm => {
            elm.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.price
            }, 0)
        })
        this.setState({
            totalPrices: pop
        })

    }

    // totalCount() {
    //     let totals = this.state.bill.map(elm => {
    //         return elm.products.reduce((previousValue, currentValue) => {
    //             return previousValue + currentValue.price
    //         }, 0)
    //     })
    //     this.setState({
    //         totalPrices: [...totals]
    //     })
    // }

    totalCount() {
        this.billService.findOneBill(this.props.match.params.is)
            .then(res => {
                console.log(res.data)
            })
    }


    render() {
        return (
            <Container className='bills' >
                {
                    this.state.bill ? (
                        <div id="app" className="app">
                            <div className='intro-bill'>
                                <h2>Factura</h2>
                                <h4>Fecha: {this.state.bill.date.toString().substring(0, 10)}</h4>
                            </div>
                            <div className='logo-bill'>
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.75 63.28"><defs></defs><title>logo_tricycle</title><rect class="cls-1" x="124.97" y="9.22" width="3.28" height="47.34" rx="1.64" /><path class="cls-1" d="M195.16,613.78a1.66,1.66,0,0,0-2.22.17,21,21,0,0,1-6.2,4.56,20.46,20.46,0,0,1-9.61,2,19.79,19.79,0,0,1-9.56-2.79,21,21,0,0,1-7.54-7.61,21.05,21.05,0,0,1,0-21,21,21,0,0,1,7.54-7.61,19.78,19.78,0,0,1,9.4-2.78,20.18,20.18,0,0,1,9.22,1.78,20.55,20.55,0,0,1,5.86,4,1.68,1.68,0,0,0,2.29.06,1.7,1.7,0,0,0,0-2.5,24.58,24.58,0,0,0-6.82-4.55,23.56,23.56,0,0,0-21.67,1.2,24.13,24.13,0,0,0-8.74,8.81,24.32,24.32,0,0,0,7,31.94,23.73,23.73,0,0,0,31.2-3.24A1.68,1.68,0,0,0,195.16,613.78Z" transform="translate(0 -566.83)" /><path class="cls-1" d="M85,602.37a15.07,15.07,0,0,0,4.41-1.27,13.9,13.9,0,0,0,5.68-4.55,11.72,11.72,0,0,0,1.27-12.13,13.45,13.45,0,0,0-3.24-4.3,15.33,15.33,0,0,0-5.1-3,18.32,18.32,0,0,0-6.26-1.05H67.64a2.38,2.38,0,0,0-2.39,2.38v43.31a1.63,1.63,0,0,0,1.64,1.64h0a1.64,1.64,0,0,0,1.64-1.64V579.32H81.78a14.21,14.21,0,0,1,6.56,1.46,11.21,11.21,0,0,1,4.36,3.75,8.58,8.58,0,0,1,1.53,4.84,8.31,8.31,0,0,1-1.82,5.21,11.63,11.63,0,0,1-4.29,3.53,23.29,23.29,0,0,1-8.74,1.38H73.55l19.16,23.28a1.68,1.68,0,0,0,1.3.61h0a1.69,1.69,0,0,0,1.3-2.76l-14.84-18A38.59,38.59,0,0,0,85,602.37Z" transform="translate(0 -566.83)" /><path class="cls-1" d="M281.54,578.74a23.56,23.56,0,0,0-21.67-1.2A24.3,24.3,0,0,0,253,582.1a1.67,1.67,0,0,0,0,2.47l0,0a1.65,1.65,0,0,0,2.26-.06,20.71,20.71,0,0,1,5.87-4,20.18,20.18,0,0,1,9.22-1.78,19.82,19.82,0,0,1,9.41,2.78,21,21,0,0,1,7.54,7.61,21.05,21.05,0,0,1,0,21,21,21,0,0,1-7.54,7.61,19.83,19.83,0,0,1-9.57,2.79,20.46,20.46,0,0,1-9.61-2,20.92,20.92,0,0,1-6.19-4.56,1.67,1.67,0,0,0-2.42,2.3,23.72,23.72,0,0,0,31.21,3.23,24.29,24.29,0,0,0-1.74-40.74Z" transform="translate(0 -566.83)" /><path class="cls-1" d="M346.17,620.1H321.22V577.68a1.63,1.63,0,0,0-1.63-1.63h0a1.63,1.63,0,0,0-1.64,1.63V622a1.41,1.41,0,0,0,1.41,1.41h26.81a1.64,1.64,0,1,0,0-3.28Z" transform="translate(0 -566.83)" /><path class="cls-1" d="M377.37,602.24V594.4h0v-15h25.71a1.68,1.68,0,0,0,1.67-1.68h0a1.67,1.67,0,0,0-1.67-1.67H375.81a1.71,1.71,0,0,0-1.72,1.71v43.91a1.72,1.72,0,0,0,1.72,1.71h27.27a1.67,1.67,0,0,0,1.67-1.67v-.08a1.67,1.67,0,0,0-1.67-1.67H377.37V602.24Z" transform="translate(0 -566.83)" /><path class="cls-1" d="M380.72,601.36l18.89,0a1.68,1.68,0,0,0,1.67-1.68h0a1.67,1.67,0,0,0-1.67-1.67l-18.89,0" transform="translate(0 -566.83)" /><rect class="cls-1" x="18.79" y="15.58" width="3.35" height="40.98" rx="1.68" /><path class="cls-1" d="M40.85,577.72h0a1.67,1.67,0,0,0-1.67-1.67H1.68A1.68,1.68,0,0,0,0,577.72H0a1.68,1.68,0,0,0,1.68,1.68h37.5A1.68,1.68,0,0,0,40.85,577.72Z" transform="translate(0 -566.83)" /><polygon class="cls-1" points="224.34 29.13 224.33 29.13 224.33 29.13 224.34 29.13" /><path class="cls-1" d="M240.72,594.31h0a1.3,1.3,0,0,0-.52-.94,1.7,1.7,0,0,0-.91-.27H226.51v0h0c0-.16,0-.28,0-.34v0h0c.41-1.77.83-3.53,1.23-5.31q.69-3.06,1.36-6.12.65-2.85,1.31-5.72c.51-2.26,1-4.53,1.55-6.79a2.49,2.49,0,0,0,.05-.46h0a1.41,1.41,0,0,0-.23-.8,1.62,1.62,0,0,0-.66-.55,1.45,1.45,0,0,0-.54-.11,1.61,1.61,0,0,0-1.29.76l-4.92,7.16-1,1.42-.51.74-1.17,1.7c-2.35,3.43-4.69,6.86-7.05,10.29l-8.39,12.18h0a3.68,3.68,0,0,0-.5.86,1.52,1.52,0,0,0-.1.55h0a1.34,1.34,0,0,0,.46,1,1.63,1.63,0,0,0,1.1.39h12.64c-.44,1.77-.89,3.53-1.34,5.3l-1.52,6L215.34,622c-.52,2-1.05,4.09-1.57,6.14a1.77,1.77,0,0,0-.07.5h0a1.45,1.45,0,0,0,.22.79,1.6,1.6,0,0,0,.63.55,1.24,1.24,0,0,0,.56.13,1.59,1.59,0,0,0,1.28-.71l4-5.6,5.12-7.23,4.88-6.88,5.12-7.23q2.51-3.53,5-7.07h0a1.61,1.61,0,0,0,.24-.9h0ZM222.08,601a2.2,2.2,0,0,0-.49,0H210l17.57-25.57c-.32,1.39-.63,2.78-.95,4.17q-.65,2.88-1.31,5.76t-1.3,5.72c-.24,1.05-.49,2.11-.74,3.18a1.43,1.43,0,0,0,0,.29,1.48,1.48,0,0,0,1.12,1.42h0a2.88,2.88,0,0,0,.73.07h11.4q-9,12.74-18,25.34c.2-.8.41-1.59.62-2.39.4-1.59.79-3.18,1.2-4.76q.75-3,1.53-6c.46-1.8.93-3.59,1.39-5.39a1.48,1.48,0,0,0-1.16-1.8Z" transform="translate(0 -566.83)" /></svg>
                            </div>
                            <div className="row fact-info mt-3">
                                <div class="col-3">
                                    <h5>Facturar a</h5>
                                    <p>
                                        {this.state.bill.userId.userName}
                                    </p>
                                </div>
                                <div className="col-3">
                                    <h5>Enviar a</h5>
                                    <p>{this.state.bill.shopId.name}</p>
                                    <p>{this.state.bill.shopId.address.direction}</p>
                                </div>
                                <div className="col-3">
                                    <h5>N° de factura</h5>
                                    <h5>Fecha</h5>
                                    <h5>Fecha de vencimiento</h5>
                                </div>
                                <div className="col-3">
                                    <h5>103</h5>
                                    <p>{this.state.bill.date.toString().substring(0, 10)}</p>
                                    <p>{this.state.bill.date.toString().substring(0, 10)}</p>
                                </div>
                            </div>
                            <div className="row my-5">
                                <table class="table table-borderless factura">
                                    <thead>
                                        <tr>
                                            <th>Cant.</th>
                                            <th>Producto</th>
                                            <th>Precio Unitario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.bill.products.map(elm =>
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
                                        <th>{this.state.totalPrices}</th>
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
