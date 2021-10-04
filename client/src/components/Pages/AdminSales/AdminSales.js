import { Badge, Table, Button } from 'react-bootstrap'
import BillService from '../../../services/bill.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AdminSales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: undefined
        }
        this.billService = new BillService()
    }

    componentDidMount() {
        this.refreshBills()
    }

    refreshBills() {
        this.billService.findBills()
            .then(bills => {
                console.log(bills.data.bills)
                this.setState({
                    bill: bills.data.bills
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.bill ?
                (
                    <>
                        <Table striped bordered hover className="shop-table">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Tienda</th>
                                    <th>Fecha</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.bill?.map(elm =>
                                    <tr key={elm._id}>
                                        <td>{elm.cartId}</td>
                                        <td>{elm.shopId}</td>
                                        <td>{elm.date}</td>
                                        <td>
                                            <Link to={``}><Badge pill bg="primary">Ver factura</Badge></Link>{' '}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </>
                )
                :
                <p>...Cargando</p>

        )
    }
}