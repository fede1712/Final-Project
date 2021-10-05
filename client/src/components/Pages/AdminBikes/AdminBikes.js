import React, { Component } from 'react'
import { Badge, Button, Table } from 'react-bootstrap'
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
        this.refreshBike()
    }

    refreshBike() {
        this.bikeService.findBikes()
            .then(bikes => {
                this.setState({
                    bike: bikes.data
                })
            })
            .catch(err => console.eroor(err))
    }

    deleteBike(id) {
        this.bikeService.deleteBike(id)
            .then(() => this.refreshBike())
            .catch(err => console.error(err))
    }


    render() {
        return (
            this.state.bike ?
                <div>
                    <h2 className='admin-title'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bicycle logo" viewBox="0 0 16 16">
                        <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                    </svg>{' '}Bicicletas</h2>
                    <Table striped bordered hover className='table-bikes' variant="dark">
                        <thead>
                            <tr>
                                <th>Modelo</th>
                                <th>Precio</th>
                                <th>Velocidad</th>
                                <th>Motor</th>
                                <th>Batería</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.bike?.map(elm =>
                                <tr key={elm._id}>
                                    <td>{elm.name}</td>
                                    <td>{elm.price}</td>
                                    <td>{elm.specifications.assistSpeed}</td>
                                    <td>{elm.specifications.motor.substring(0, 23)}</td>
                                    <td>{elm.specifications.battery}</td>
                                    <td>
                                        <Link to={`/editar-bici/${elm._id}`}><Badge pill bg="warning"> Editar </Badge></Link>{' '}
                                        <span className='delete-btn' onClick={() => this.deleteBike(elm._id)}><Badge pill bg="danger"> Eliminar </Badge></span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Button as={Link} to='/nueva-bici' bg="secondary" className='add-bike-btn' variant="secondary">Nueva bicicleta</Button>
                </div>
                :
                <p>...Cargando</p>
        )
    }
}
