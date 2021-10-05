import { Container, Form, Button } from 'react-bootstrap'
import 'bootstrap'
import AuthService from '../../../services/auth.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import ImgSignUp from "./../Signup/try-contacto.png"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        const { email, pwd } = this.state

        this.authService.login(email, pwd)
            .then(res => {
                this.props.storeUser(res.data)
                this.props.history.push("/")
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div className='login-Back'>


                <div className="back-dark">
                    <div className='registro login-card justify-content-center'>
                        <div className="card reset-margin">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    {/* <div className="card-img"></div> */}
                                    <img src={ImgSignUp} className="card-img" alt={ImgSignUp} />
                                </div>
                                <div className="col-md-8 backColorForm">

                                    <div className="col-10">
                                        <Form onSubmit={this.handleFormSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control name="email" value={this.state.email} onChange={this.handleInput} type="text" placeholder="Email" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Contraseña" />
                                            </Form.Group>

                                            <p>¿No estas registrad@? <Link to='/registro'>Registrate</Link></p>

                                            <Button className="button-logIn" variant="secondary" type="submit">
                                                Entrar
                                            </Button>
                                        </Form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        )
    }
}
