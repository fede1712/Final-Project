import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login/Login'

const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>

            <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />

        </Switch>
    )
}

export default Routes