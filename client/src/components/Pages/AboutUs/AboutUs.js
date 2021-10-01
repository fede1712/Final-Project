import React from 'react'
import { Row } from 'react-bootstrap'
import './AboutUs.css'

export default function AboutUs() {


    return (


        <Row className="justify-content">

            <div className="about">
                <h1>TriCycle is the first connected bike that gives <tr /> people the freedom to Take The Streets.</h1>
                <p>
                    Our purpose is to be the most intelligent way to move through cities. Through a passion for design and technology working in harmony to unlock a new path for people and systems, we are creating a new experience for people to move freely around cities. <tr />
                    Founded in 2021 and headquartered in Brussels, Belgium, Tricycle is designed and engineered by a team of curious individuals challenging the status quo of the e-bike category and the everyday commute. By creating an elegant and affordable bike and connecting with each rider's journey through the app, a new generation of mobility has arrived.
                </p>
            </div>

            <div className="about-info">
                <div className='year'>
                    <h3>Founded</h3>
                    <h1>2021</h1>
                </div>

                <div className='founded'>
                    <h3>Made in</h3>
                    <h1>Ironhack</h1>
                </div>
            </div>
        </Row>
    )
}
