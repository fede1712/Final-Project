import React, { Component } from 'react'
import { Badge, Button, Nav, Table } from 'react-bootstrap'
import UserService from '../../../services/user.services'
import './AdminClients.css'


export default class AdminClients extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined
        }
        this.userService = new UserService()
    }

    componentDidMount() {
        this.refreshUser()
    }

    refreshUser() {
        this.userService.findUser()
            .then(users => {
                this.setState({
                    user: users.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteUser(id) {
        this.userService.deleteUser(id)
            .then(() => this.refreshUser())
            .catch(err => console.log(err))
    }


    render() {
        return (
            this.state.user ?
                <Table striped bordered hover className='table-users'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user?.map(elm =>
                            <tr key={elm._id}>
                                <td>{elm.userName}</td>
                                <td>
                                    <span className='delete-btn' onClick={() => this.deleteUser(elm._id)}><Badge pill bg="danger"> Eliminar </Badge></span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                :
                <p>...Cargando</p>
        )
    }
}
