import React from 'react'
import { Badge, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './UserProfile.css'



export default function UserProfile({ loggedUser }) {



    return (
        <Container>
            <hr />
            <hr />
            <hr />
            <hr />
            <h1 className="userProfile">¡Bienvenid@, {loggedUser.userName}</h1>
            <Link className="btn btn-dark" to={`/editar-perfil/${loggedUser._id}`}><Badge pill bg="warning"> Editar mi perfil </Badge></Link>
        </Container>
    )
}