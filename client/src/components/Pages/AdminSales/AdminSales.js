import { Badge, Table } from 'react-bootstrap'
import BillService from '../../../services/bill.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../AdminClients/AdminClients.css'

export default class AdminSales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: [],
            totalPrices: []
        }
        this.billService = new BillService()
    }

    componentDidMount() {
        this.refreshBills()
    }

    refreshBills() {
        this.billService.findBills()
            .then(bills => {
                this.setState({
                    bill: bills.data.bills
                })
                this.totalCount()
            })
            .catch(err => console.error(err))
    }

    totalCount() {
        let totals = this.state.bill.map(elm => {
            return elm.products.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.price
            }, 0)
        })
        this.setState({
            totalPrices: [...totals]
        })
    }


    render() {
        return (
            this.state.bill ?
                (
                    <>
                        <h2 className='admin-title'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart-check logo" viewBox="0 0 16 16">
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>{' '}Ventas</h2>
                        <div className='table-wrap'>
                            <Table striped bordered hover className="table-users" variant="dark">
                                <thead>
                                    <tr className='table-title'>
                                        <th>Cliente</th>
                                        <th>Productos</th>
                                        <th>Tienda</th>
                                        <th>Dirección</th>
                                        <th>Fecha</th>
                                        <th>Total factura</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.bill?.map((elm, i) =>
                                        <tr key={elm._id}>
                                            <td>{elm.userId.userName}</td>
                                            <td><ul>{elm.products.map(elm => <p>- {elm.name}</p>)}</ul></td>
                                            <td>{elm.shopId.name}</td>
                                            <td>{elm.shopId.address.direction}</td>
                                            <td>{elm.date.toString().substring(0, 10)}</td>
                                            <td>{this.state.totalPrices[i]} €</td>
                                            <td>
                                                <Link to={`/detalles-ventas/${elm._id}`}><Badge pill bg="secondary">Ver factura</Badge></Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </>

                )
                :
                <div></div>

        )
    }
}