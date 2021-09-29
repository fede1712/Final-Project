import { Badge, Table, Button } from 'react-bootstrap'
import ShopService from '../../../services/shop.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AdminShop.css'


export default class AdminShops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shop: undefined
        }
        this.shopService = new ShopService()
    }

    componentDidMount() {
        this.shopService.findShops()
            .then(shops => {
                this.setState({
                    shop: shops.data
                })
            })

    }

    render() {
        return (
            this.state.shop ?
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
                                {this.state.shop?.map(elm =>
                                    <tr key={elm._id}>
                                        <td>{elm.name}</td>
                                        <td>{elm.address.direction}</td>
                                        <td><Link>  <Badge pill bg="warning">Editar</Badge></Link>{' '}
                                            <Link>  <Badge pill bg="danger">Eliminar</Badge></Link>
                                        </td>
                                    </tr>)}
                            </tbody>
                            <Button className="add-shop" as={Link} variant="primary" size="lg">Nueva tienda</Button>
                        </Table>
                    </>
                )
                :
                <p>...Cargando</p>

        )
    }
}