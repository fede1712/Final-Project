import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import Routes from './components/Routes/Index';
import React, { Component } from 'react'
import AuthService from './services/auth.service';
import Footer from './components/layout/Footer/Footer';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedUser: undefined
    }
    this.authService = new AuthService()
  }
  componentDidMount = () => {
    this.fetchUser()
  }

  storeUser = (user) => this.setState({ loggedUser: user })
  fetchUser = () => {
    console.log("pido el nuevo")
    this.authService.isloggedin()
      .then(res => this.storeUser(res.data))
      .catch(err => this.storeUser(null))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation loggedUser={this.state.loggedUser} storeUser={this.storeUser} />
          <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} fetchUser={this.fetchUser} />
          <Footer />
        </header>
      </div>
    )
  }
}
