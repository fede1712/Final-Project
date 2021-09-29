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
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <NavBarAdmin />

                        {this.props.children ?
                            <Col xs={8} >{this.props.children}</Col>
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
