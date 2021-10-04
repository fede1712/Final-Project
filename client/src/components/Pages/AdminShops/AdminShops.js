import { Badge, Table, Button } from 'react-bootstrap'
import ShopService from '../../../services/shop.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AdminShop.css'


export default class AdminShops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: []
        }
        this.shopService = new ShopService()
    }

    componentDidMount() {
        this.refreshShops()
    }

    refreshShops() {
        this.shopService.findShops()
            .then(shops => {
                this.setState({
                    shop: shops.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteShops(id) {
        this.shopService.deleteShop(id)
            .then(() => this.refreshShops())
            .catch(err => console.log(err))
    }

    render() {
        return (
            this.state.shop ?
                (
                    <>
                        <Table striped bordered hover className="shop-table" variant="dark">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.shop?.map(elm =>
                                    <tr key={elm._id}>
                                        <td>{elm.name}</td>
                                        <td>{elm.address.direction}</td>
                                        <td>
                                            <Link to={`/editar-tienda/${elm._id}`}><Badge pill bg="warning">Editar</Badge></Link>{' '}
                                            <span className='delete-btn' onClick={() => this.deleteShops(elm._id)}><Badge pill bg="danger">Eliminar</Badge></span>
                                        </td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </Table>
                        <Badge pill as={Link} to='/nueva-tienda' bg="primary" className='add-bike-btn'>
                            Nueva tienda
                        </Badge>
                    </>
                )
                :
                <p>...Cargando</p>

        )
    }
}