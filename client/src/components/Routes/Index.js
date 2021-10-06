import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from '../Pages/Signup/Signup.js';
import Login from '../Pages/Login/Login.js'
import Home from '../Pages/Home/Home.js';
import UserProfile from '../Pages/UserProfile/UserProfile.js';
import Contact from '../Pages/Contact/Contact.js';
import AboutUs from '../Pages/AboutUs/AboutUs.js';
import Bike from '../Pages/Bike/Bike';
import NewShop from '../Pages/NewShop/NewShop';
import ShopEdit from '../Pages/Shop-Edit/Shop-Edit.js';
import AdminPage from '../Pages/AdminPage/AdminPage.js'
import NewBike from '../Pages/Bike/NewBike.js';
import AdminShops from '../Pages/AdminShops/AdminShops'
import AdminBikes from '../Pages/AdminBikes/AdminBikes.js';
import BikeEdit from '../Pages/BikeEdit/BikeEdit.js';
import AdminClients from '../Pages/AdminClients/AdminClients.js';
import AdminStock from '../Pages/AdminStock/AdminStock.js';
import UserEdit from '../Pages/UserProfile/UserEdit.js';
import Cart from '../Pages/Cart/Cart.js';
import AdminSales from '../Pages/AdminSales/AdminSales.js';
import CompletePurchase from '../Pages/CompletePurchase/CompletePurchase'
import SalesDetails from '../Pages/SalesDetails/SalesDetails.js';
import Navigation from '../layout/Navigation/Navigation.js';
import Footer from '../layout/Footer/Footer.js';
import StockEdit from '../Pages/StockEdit/StockEdit.js';


const Routes = ({ storeUser, loggedUser, fetchUser }) => {

    return (

        <Switch>
            <Route exact path="/" render={() => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><Home /><Footer /></>)
            }} />

            <Route exact path="/registro" render={(props) => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><Signup {...props} /><Footer /></>)
            }} />

            <Route exact path="/iniciar-sesion" render={(props) => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><Login storeUser={storeUser} {...props} /><Footer /></>)
            }} />

            <Route exact path="/perfil" render={() => {
                return (loggedUser ? <><Navigation loggedUser={loggedUser} storeUser={storeUser} /><UserProfile fetchUser={fetchUser} loggedUser={loggedUser} /><Footer /></> : <Redirect to="/iniciar-sesion" />)
            }} />

            <Route exact path='/contacto' render={() => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><Contact /><Footer /></>)
            }} />

            <Route exact path='/sobre-nosotros' render={() => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><AboutUs /><Footer /></>)
            }} />

            <Route exact path='/editar-perfil/:id' render={(props) => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><UserEdit storeUser={storeUser} fetchUser={fetchUser} {...props} /><Footer /></>)
            }} />
            <Route exact path='/carrito' render={(props) => {
                return (loggedUser ? <><Navigation loggedUser={loggedUser} storeUser={storeUser} /><Cart {...props} /><Footer /></> : <Redirect to='/' />)
            }} />
            <Route exat path='/comprar' render={(props) => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><CompletePurchase {...props} /><Footer /></>)
            }} />

            {/* admin routes */}
            <Route exact path='/nueva-bici' render={(props) => <AdminPage><NewBike {...props} /></AdminPage>} />
            <Route exact path='/editar-bici/:id' render={(props) => <AdminPage><BikeEdit {...props} /></AdminPage>} />
            <Route exact path='/nueva-tienda' render={(props) => <AdminPage><NewShop {...props} /></AdminPage>} />
            <Route exact path='/editar-tienda/:id' render={(props) => <AdminPage><ShopEdit {...props} /> </AdminPage>} />
            <Route exact path='/editar-stock/:id' render={(props) => loggedUser ? <AdminPage> <StockEdit {...props} /> </AdminPage> : <Redirect to='/' />} />

            <Route exact path='/lista-tiendas' render={(props) => <AdminPage><AdminShops {...props} /></AdminPage>} />
            <Route exact path='/lista-bicis' render={(props) => <AdminPage> <AdminBikes {...props} /> </AdminPage>} />
            <Route exact path='/lista-clientes' render={(props) => <AdminPage> <AdminClients {...props} /> </AdminPage>} />
            <Route exact path='/stock' render={(props) => <AdminPage> <AdminStock {...props} /> </AdminPage>} />
            <Route exact path='/ventas' render={(props) => <AdminPage> <AdminSales {...props} /> </AdminPage>} />
            <Route exact path='/detalles-ventas/:id' render={(props) => <AdminPage> <SalesDetails {...props} /> </AdminPage>} />
            <Route exact path='/admin-panel' render={() => loggedUser ? <AdminPage></AdminPage> : <Redirect to='/' />} />
            {/* id paths */}

            <Route path='/:bike' render={(props) => {
                return (<><Navigation loggedUser={loggedUser} storeUser={storeUser} /><Bike {...props} /><Footer /></>)
            }} />
        </Switch >
    )

}

export default Routes