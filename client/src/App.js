import './App.css';
import Routes from './components/Routes/Index';
import React, { Component } from 'react'
import AuthService from './services/auth.service';

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
    this.authService.isloggedin()
      .then(res => this.storeUser(res.data))
      .catch(err => this.storeUser(null))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} fetchUser={this.fetchUser} onAdminPanel={this.adminPanel} />
        </header>
      </div>
    )
  }
}
