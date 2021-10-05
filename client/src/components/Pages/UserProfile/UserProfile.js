import React, { Component } from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './UserProfile.css'
import BillService from '../../../services/bill.service'

export default class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tickets: []
        }
        this.billService = new BillService()
    }

    componentDidMount() {
        this.refresTickets()
    }

    refresTickets() {
        this.billService.findBills()
            .then(tik => {
                console.log(tik)
                let userTickets = []
                tik.data.bills.map(elm => {
                    if (elm.userId._id === this.props.loggedUser._id)
                        userTickets.push(elm)
                })
                this.setState({
                    tickets: userTickets
                })
            })
    }



    render() {
        return (
            this.state.tickets ?
                <div className='user-bills'>
                    <div>
                        <h1 className="userProfile">¡Bienvenid@, {this.props.loggedUser.userName}</h1>
                        <div>
                            <div>
                                <Container fluid>
                                    <Row>
                                        {this.state.tickets?.map(elm =>
                                            <Col xs={4}>
                                                <Card className='card-user' style={{ width: '18rem' }}>
                                                    <Card.Body>
                                                        <Card.Title>{elm.date.toString().substring(0, 10)}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted">{elm.shopId.name}</Card.Subtitle>
                                                        <Card.Text>{elm.products.name}</Card.Text>
                                                        <Card.Text >
                                                            {elm.products.map((elm) =>
                                                                <div key={elm._id}>
                                                                    <p>{elm.name} <p>{elm.price}</p></p>
                                                                </div>
                                                            )}
                                                        </Card.Text>
                                                        <Card.Text ></Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div>
                            <Link className="btn btn-dark" to={`/editar-perfil/${this.props.loggedUser._id}`}><Badge pill bg="warning"> Editar mi perfil </Badge></Link>
                        </div>
                    </div>
                </div>
                :
                <p>...Cargando</p>
        )
    }
}
