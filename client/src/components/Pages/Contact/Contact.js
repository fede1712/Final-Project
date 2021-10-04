import { Col, Row } from 'react-bootstrap'
import './Contact.css'
import ShopService from '../../../services/shop.service'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, { Component } from 'react'
import Map from './Map'
import Markers from './Marker'

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
                            <h2><strong>Nuestras tiendas</strong></h2>
                        </div>
                        <Row className='contact'>
                            <Col>
                                <ul className='shop-list'>{this.state.shop?.map(elm =>
                                    <li>{elm.name}{' '}--{' '}
                                        <strong>{elm.address.direction}</strong>
                                    </li>

                                )}</ul>
                            </Col>
                            <Col>
                                <div className='map'>
                                    <Map googleMapURL={process.env.REACT_APP_API_MAPS}
                                        containerElement={<div style={{ height: '400px' }} />}
                                        mapElement={<div style={{ height: '100%' }} />}
                                        loadingElement={<p>Cargando</p>}
                                        {...this.state}
                                    />

                                </div>
                            </Col>
                        </Row>
                    </>
                )
                :
                <p>...Cargando</p>

        )
    }
}