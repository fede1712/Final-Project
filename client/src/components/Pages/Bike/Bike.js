import React, { Component } from 'react'
import BikeService from '../../../services/bike.service'

export default class Bike extends Component {

    constructor() {
        super()
        this.state = {
            bikes: null
        }
        this.bikeService = new BikeService()
    }

    componentDidMount() {
        this.bikeService.findOneBike()
            .then(res => {
                this.setState({
                    ...this.state,
                    bikes: res.data
                })
            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}
