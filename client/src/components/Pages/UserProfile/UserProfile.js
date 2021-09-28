import React from 'react'
import { Container } from 'react-bootstrap'
import './UserProfile.css'

export default function UserProfile({ loggedUser }) {

    return (

        <Container>
            <h1 className="userProfile">¡Bienvenid@, {loggedUser.userName}</h1>
        </Container>

    )
}
