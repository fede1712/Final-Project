import React, { Component } from 'react'
import { Badge, Button, Table } from 'react-bootstrap'
import BikeService from '../../../services/bike.service'
import { Link } from 'react-router-dom'

export default class AdminStock extends Component {

    constructor() {
        super()
        this.state = {
            bike: undefined
        }
        this.bikeService = new BikeService()
    }

    componentDidMount() {
        this.refreshBike()
    }

    refreshBike() {
        this.bikeService.findBikes()
            .then(bikes => {
                this.setState({
                    bike: bikes.data
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            this.state.bike ?
                <div>

                    <Table striped bordered hover className='table-bikes' variant="dark">
                        <thead>
                            <tr>
                                <th>Modelo</th>
                                <th>Stock</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.bike?.map(elm =>
                                <tr key={elm._id}>
                                    <td>{elm.name}</td>
                                    <td>{elm.quantity}</td>
                                    <td>
                                        <Link to={`/editar-bici/${elm._id}`}><Badge pill bg="warning"> Editar </Badge></Link>{' '}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Badge pill as={Link} to='/nueva-bici' bg="primary" className='add-bike-btn'>
                        Nueva bicileta
                    </Badge>
                </div>
                :
                <p>...Cargando</p>
        )
    }
}

