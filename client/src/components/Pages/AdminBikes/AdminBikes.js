import React, { Component } from 'react'
import { Badge, Button, Nav, Table } from 'react-bootstrap'
import BikeService from '../../../services/bike.service'
import { Link } from 'react-router-dom'
import './AdminBikes.css'

export default class AdminBikes extends Component {

    constructor() {
        super()
        this.state = {
            bike: undefined
        }
        this.bikeService = new BikeService()
    }

    componentDidMount() {
        this.bikeService.findBikes()
            .then(bikes => {
                this.setState({
                    bike: bikes.data
                })
            })
    }


    render() {
        return (
            this.state.bike ?
                <Table striped bordered hover className='table-bikes'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bike?.map(elm =>
                            <tr key={elm._id}>
                                <td>{elm.name}</td>
                                <td>{elm.price}</td>
                                <td>{elm.quantity}</td>
                                <td>
                                    <Link><Badge pill bg="warning"> Editar </Badge></Link>{' '}
                                    <Link><Badge pill bg="danger"> Eliminar </Badge></Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <Button className='add-bike' as={Link} variant="primary" to='/nueva-bici' size="lg">Nueva bicileta</Button>
                </Table>
                :
                <p>...Chapassss</p>
        )
    }
}
