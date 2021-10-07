import { Button, Form } from 'react-bootstrap'
import './UserEdit.css'
import React, { Component } from 'react'
import UserService from '../../../services/user.services'
import ImgSignUp from "./edit-profile.png"





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
                const { userName, email } = res.data.user

                this.setState({
                    userName,
                    email
                })
            })
            .catch(err => console.error(err))
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

        this.userService.editUser(this.state, this.props.match.params.id)

            .then(() => {
                this.props.fetchUser()

                this.setState({

                    //     userName: "",
                    //     email: "",
                    password: ""
                })

                this.props.history.push('/perfil')
            })
            .catch(err => console.error(err, "error de fetchUser!"))
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
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control onChange={(e) => this.handleChange(e)} name="userName" value={this.state.userName} type="text" placeholder={this.state.userName} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control onChange={(e) => this.handleChange(e)} name="email" value={this.state.email} type="text" placeholder={this.state.email} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Nueva contraseña</Form.Label>
                                            <Form.Control onChange={(e) => this.handleChange(e)} name="password" value={this.state.password} type="password" placeholder='********' />
                                        </Form.Group>
                                        <Button variant=" btn btn-secondary button-logIn" type="submit">
                                            Guardar
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
