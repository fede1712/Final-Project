import { Container, Form, Button } from 'react-bootstrap'
import 'bootstrap'
import AuthService from '../../../services/auth.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

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
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='login'>
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

                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>

            </div>
        )
    }
}
