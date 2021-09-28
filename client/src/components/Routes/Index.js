import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Signup from '../Pages/Signup/Signup.js';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/registro" render={(props) => <Signup {...props} />} />
        </Switch>
    )
}

export default Routes