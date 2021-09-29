import { Col, Row } from 'react-bootstrap'
import './Contact.css'
import ShopService from '../../../services/shop.service'
import React, { Component } from 'react'

export default class Contact extends Component {
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
                console.log(shops);
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
                        <div className='contact-title'>
                            <h2><strong> Contacto</strong></h2>
                        </div>
                        <Row className='contact'>
                            <Col>
                                <h3>Nuestras tiendas</h3>
                                <ul>{this.state.shop?.map(elm =>
                                    <li>{elm.name}</li>
                                )}</ul>
                            </Col>
                            <Col>
                                <div className='map' />
                            </Col>
                        </Row>
                    </>
                )
                :
                <p>...Cargando</p>

        )
    }
}