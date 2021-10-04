import React, { Component } from 'react'
import NavBarAdmin from './NavBarAdmin.js'
import 'react-bootstrap'
import 'bootstrap'
import { Col, Container, Row } from 'react-bootstrap'


export default class AdminPage extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={2}>
                            <NavBarAdmin />
                        </Col>

                        {this.props.children ?
                            <Col xs={10}>{this.props.children}</Col>
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
