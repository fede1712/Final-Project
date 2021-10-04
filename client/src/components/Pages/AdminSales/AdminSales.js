import { Badge, Table, Button } from 'react-bootstrap'
import BillService from '../../../services/bill.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../AdminClients/AdminClients.css'

export default class AdminSales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: []
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
                    <div className='table-wrap'>
                        <Table striped bordered hover className="table-users" variant="dark">
                            <thead>
                                <tr className='table-title'>
                                    <th>Cliente</th>
                                    <th>Tienda</th>
                                    <th>Fecha</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.bill?.map(elm =>
                                    <tr key={elm._id}>
                                        <td>{elm.cartId.userId.userName}</td>
                                        <td>{elm.shopId.name}</td>
                                        <td>{elm.date.toString().substring(0, 10)}</td>
                                        <td>
                                            <Link to={``}><Badge pill bg="primary">Ver factura</Badge></Link>{' '}
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