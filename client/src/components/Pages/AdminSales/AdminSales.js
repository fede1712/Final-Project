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
                                    <th>Dirección</th>
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
                                            <Link to={`/editar-tienda/${elm._id}`}><Badge pill bg="warning">Editar</Badge></Link>{' '}
                                            <span className='delete-btn' onClick={() => this.deleteShops(elm._id)}><Badge pill bg="danger">Eliminar</Badge></span>
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