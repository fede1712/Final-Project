import React, { Component } from 'react'
import { Badge, Table } from 'react-bootstrap'
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
            .catch(err => console.error(err))
    }

    deleteUser(id) {
        this.userService.deleteUser(id)
            .then(() => this.refreshUser())
            .catch(err => console.error(err))
    }


    render() {
        return (
            this.state.user ?
                <>

                    <h2 className='admin-title'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-people logo" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>{' '}Clientes</h2>
                    <div className='table-wrap'>

                        <Table striped bordered hover className='table-users' variant="dark">
                            <thead>
                                <tr className='table-title'>
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
                    </div>
                </>
                :
                <div></div>
        )
    }
}
