import { Container, Form, Button } from 'react-bootstrap'
import 'bootstrap'
import AuthService from './../../../services/auth.service'

import React, { Component } from 'react'

export default class login extends Component {
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
            <>
                <Container>
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control name="email" value={this.state.email} onChange={this.handleInput} type="text" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Container>
            </>
        )
    }
}
