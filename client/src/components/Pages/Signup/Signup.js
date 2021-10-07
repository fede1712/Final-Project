import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Signup.css'
import ImgSignUp from "./login.png"


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            pwd: ""
        }
        this.authService = new AuthService()
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { userName, email, pwd } = this.state
        this.authService
            .signup(userName, email, pwd)
            .then(res => this.props.history.push("/"))
            .catch(err => console.error(err))
    }


    render() {
        return (
            <div className="back-dark">
                <div className='registro login-card justify-content-center'>
                    <div className="card reset-margin">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={ImgSignUp} className="card-img" alt={ImgSignUp} />
                            </div>
                            <div className="col-md-8 backColorForm">

                                <div className="col-10">
                                    <Form onSubmit={this.handleFormSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control name="userName" value={this.state.userName} onChange={this.handleInput} type="text" placeholder="Enter name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" value={this.state.email} onChange={this.handleInput} type="text" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control name="pwd" value={this.state.password} onChange={this.handleInput} type="password" placeholder="Password" />
                                        </Form.Group>

                                        <p>¿Estas ya registrad@? <Link to='/iniciar-sesion'>Inicia sesión</Link></p>

                                        <Button variant=" btn btn-secondary button-logIn" type="submit">
                                            Aceptar
                                        </Button>
                                    </Form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup