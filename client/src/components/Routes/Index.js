import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from '../Pages/Signup/Signup.js';
import Login from '../Pages/Login/Login'
import Home from '../Pages/Home/Home.js';
import UserProfile from '../Pages/UserProfile/UserProfile.js';
import Contact from '../Pages/Contact/Contact.js';
import AboutUs from '../Pages/AboutUs/AboutUs.js';
import Bike from '../Pages/Bike/Bike';
import AdminPage from '../Pages/AdminPage/AdminPage.js'
import NavBarAdmin from '../Pages/AdminPage/NavBarAdmin.js';
import NewBike from '../Pages/Bike/NewBike.js';


const Routes = ({ storeUser, loggedUser }) => {

    return (

        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/registro" render={(props) => <Signup {...props} />} />
            <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/perfil" render={() => loggedUser ? <UserProfile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
            <Route exact path='/contacto' render={() => <Contact />} />
            <Route exact path='/sobre-nosotros' render={() => <AboutUs />} />

            {/* admin routes */}
            <Route exact path='/admin-panel' render={() => <AdminPage></AdminPage>} />

            {/* <Route exact path='/nueva-bici' render={() => <AdminPage><NewBike /></AdminPage>} /> */}

            {/* 
            <Route exact path='/nueva-tienda' render={() => <AdminPage> <NewShop /> </AdminPage>} />


            
            
            
            <Route path='/editar-bici/:id' render={() => <AdminPage> <EditBike /> </AdminPage>} />
            <Route path='/editar-tienda/:id' render={() => <AdminPage> <NewShop /> </AdminPage>} /> */}



            {/* id paths */}
            <Route path='/:bike' render={(props) => <Bike {...props} />} />
        </Switch>
    )
}

export default Routes