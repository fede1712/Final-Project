import { Badge, Table, Button } from 'react-bootstrap'
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
            .catch(err => console.log(err))
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
                                        <td><ul>{elm.products.map((elm) => <p>- {elm.name}</p>)}</ul></td>
                                        <td>{elm.shopId.name}</td>
                                        <td>{elm.shopId.address.direction}</td>
                                        <td>{elm.date.toString().substring(0, 10)}</td>
                                        <td>{this.state.totalPrices[i]}</td>
                                        <td>
                                            <Link to={`/detalles-ventas/${elm._id}`}><Badge pill bg="primary">Ver factura</Badge></Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>

                )
                :
                <p>...Cargando</p>

        )
    }
}