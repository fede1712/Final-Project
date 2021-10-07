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
                        <h1 className="h1SizeProfile">Tu perfil</h1>
                        <h1 className="userProfile">¡Bienvenid@ {this.props.loggedUser.userName}!</h1>
                        <p>Aquí podras encotrar los datos de perfil y un historico de tus compras.</p>
                        <hr />
                        <h5><strong>Nombre de usuario: </strong>{this.props.loggedUser.userName}</h5>
                        <hr />
                        <h5><strong>Mail: </strong>{this.props.loggedUser.email}</h5>
                        <div>
                            <Link className="btn btn-secondary buttoncartImg paddingButtProfile" to={`/editar-perfil/${this.props.loggedUser._id}`}>Edita tu perfil  {this.props.loggedUser.userName}</Link>
                        </div>
                        <hr />
                        <h2 className="userProfile h2SizeProfile">Listado de compras</h2>
                        <div>
                            <div>
                                <Container fluid >
                                    <Row>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Fecha de compra</th>
                                                    <th scope="col">Punto de entrega</th>
                                                    <th scope="col">Productos</th>
                                                    <th scope="col">Precios</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        {this.state.tickets?.map(elm =>
                                            <div>
                                                <table class="table">

                                                    <tbody>

                                                        <tr>
                                                            <th scope="row">{elm.date.toString().substring(0, 10)}</th>
                                                            <td><p>{elm.products.name}</p></td>

                                                            <td>{elm.shopId.name}</td>
                                                            <td>{elm.products.map((elm) =>
                                                                <div key={elm._id}>
                                                                    <p>{elm.name}</p>
                                                                </div>
                                                            )}</td>
                                                            <td>{elm.products.map((elm) =>
                                                                <div key={elm._id}>
                                                                    <p>{elm.price}</p>
                                                                </div>
                                                            )}</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>


                                        )}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div>
                            <Link className="btn btn-dark" to={`/editar-perfil/${this.props.loggedUser._id}`}>Editar mi perfil</Link>
                        </div>
                    </div>
                </div>
                :
                <p>...Cargando</p>
        )
    }
}
