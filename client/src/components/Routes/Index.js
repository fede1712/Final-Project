import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from '../Pages/Signup/Signup.js';
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home.js';
import UserProfile from '../Pages/UserProfile/UserProfile.js';
import Contact from '../Pages/Contact/Contact.js';
import AboutUs from '../Pages/AboutUs/AboutUs.js';
import AdminPage from '../Pages/AdminPage/AdminPage.js';


const Routes = ({ storeUser, loggedUser }) => {

    return (

        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/registro" render={(props) => <Signup {...props} />} />
            <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />
            <Route exact path="/" render={() => <Home />} />
            <Route path="/perfil" render={() => loggedUser ? <UserProfile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
            <Route exact path='/contacto' render={() => <Contact />} />
            <Route exact path='/sobre-nosotros' render={() => <AboutUs />} />

            <Route exact path='/admin-panel' render={() => <AdminPage />} />
        </Switch>
    )
}

export default Routes