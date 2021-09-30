import { Container, Button, Form } from 'react-bootstrap'
import './UserEdit.css'
import React, { Component } from 'react'
import UserService from '../../../services/user.services'




export default class UserEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            email: "",
            password: ""
        }
        this.userService = new UserService();
    }

    componentDidMount = () => {

        this.userService.findOneUser(this.props.match.params.id)

            .then(res => {
                const { userName, email, password } = res.data.user

                this.setState({
                    userName,
                    email,
                    password: "●●●●●●●●"
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.props.match.params.id)

        this.userService.editUser(this.state, this.props.match.params.id)

            .then(() => {
                this.props.fetchUser()
                this.setState({

                    userName: "",
                    email: "",
                    password: ""
                })

                this.props.history.push('/perfil')
            })
            .catch(err => console.error(err))
    }


    render() {

        return (

            <Container>
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="userName" value={this.state.userName} type="text" placeholder={this.state.userName} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="email" value={this.state.email} type="text" placeholder={this.state.email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="password" value={this.state.password} type="password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        )

    }
}
