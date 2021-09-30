import { Badge, Table, Button } from 'react-bootstrap'
import BillService from '../../../services/bill.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AdminSales extends Component {
    constructor(props) {
        super(props)
        console.log(props)
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
                this.setState({
                    bill: bills
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
                                    <th>Nombre</th>
                                    <th>Dirección</th>
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
                            <Button className="add-shop" as={Link} variant="primary" size="lg" to='/nueva-tienda'>Nueva tienda</Button>
                        </Table>
                    </>
                )
                :
                <p>...Cargando</p>

        )
    }
}