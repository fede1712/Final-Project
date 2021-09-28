import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Signup from '../Pages/Signup/Signup.js';
import Login from '../Pages/Login/Login'



const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            <Route exact path="/registro" render={(props) => <Signup {...props} />} />
            <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />

        </Switch>
    )
}

export default Routes