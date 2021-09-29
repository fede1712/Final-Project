import React, { Component } from 'react'
import NavBarAdmin from './NavBarAdmin.js'
import 'react-bootstrap'
import 'bootstrap'
import { Container, Row } from 'react-bootstrap'


export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <NavBarAdmin />

                        {this.props.children ?
                            this.props.children
                            :
                            <div className='col-8'>
                                <p>No tengo hijo</p>
                            </div>
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}
