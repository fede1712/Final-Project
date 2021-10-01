import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

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
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <br />
                <br />
                <br />
                <br />
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="userName" value={this.state.userName} onChange={this.handleInput} type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={this.state.email} onChange={this.handleInput} type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pwd" value={this.state.password} onChange={this.handleInput} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Signup