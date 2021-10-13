# Tricycle Project

## Project Description
Single page application
Aplicación web de comercio online para la venta de bicicletas de diseño electricas.

## Instalación

Primero tenemos que descargarnos las dependencias para que la aplicación funcione. Tendremos que descargarnos las dependencias tanto del backend (server), como las del frontend (client). Entramos mediante la consola en la carpeta de cliente o servidor, y lanzamos el siguiente comando:

```
npm install
```

Con ese comando se descargaran todas las dependecias necesarias para que pueda arrancar la aplicación.

Despues de descargar las dependencias, es necesario implementar el archivo .env en ambas carpetas. Donde se tendrá que incluir lo siguiente, en el servidor: 

```
PORT = Aquí incluira el puerto en el que quiera que este su aplicación Ej: 5005
ORIGIN = Incluir la URL de su localhost Ej: http://localhost:3000
MONGODB_URI = La URL de su base de datos, en nuestro caso usabamos mongoDB
SESS_SECRET = La que usted quiera
STRIPE_KEY= 
CLOUDINARY_NAME = Nombre de su usuario de Cloudinary
CLOUDINARY_KEY = La Key de su cuenta de Cloudinary
CLOUDINARY_SECRET = El secret de su cuenta de Cloudinary
```

En el cliente: 

```
REACT_APP_API_URL = Dirección de api URL
REACT_APP_API_MAPS = Api de maps
REACT_APP_API_KEY_MAPS = Api Key de maps
REACT_APP_API_KEY_STRIPE_PUBLIC = Api Key de Stripe
```

Ya esta preparado para poder usar la aplicación.





## Back-end Endpoints

| Routes file | Method                    | Endpoint                   | Action                                           | 
| ----------- | ------------------------- | ----------------           |------------------------------------------------- |
| User 
|             | POST                      | /auth/signup               | User register                                    |
|             | POST                      | /auth/login                | User login                                       |
|             | GET                       | /auth/logout               | User logout                                      |
|             | DELETE                    | /auth/myprofile/:id/delete | Delete user profile                              |
|             | POST                      | /auth/isloggedin           | Check if user is logged in                       |
| Bikes
|             | GET                       | /bike/:id                  | Bikes details                                    |
|             | POST                      | /bike                      | Create Bike                                      |
|             | PUT                       | /bike/:id                  | Update Bike                                      |
|             | DELETE                    | /bike/:id                  | Delete Bike                                      |
| Shops
|             | GET                       | /shop                      | All shops                                        |
|             | POST                      | /shop                      | Create shop                                      |
|             | PUT                       | /shop/:id                  | Update shop                                      |
|             | DELETE                    | /shop/:id                  | Delete shop                                      |
| Cart
|             | GET                       | /cart/:id                  | Get cart by id                                   |
|             | POST                      | /cart                      | Create cart                                      |
|             | PUT                       | /cart/:id                  | Update cart                                      |
|             | DELETE                    | /cart/:id                  | Delete cart                                      |
| Bill
|             | GET                       | /bill/:id                  | Get a bill by id                                 |
|             | GET                       | /bill                      | Get all bills                                    |
|             | POST                      | /bill/                     | Create a bill                                    |



## Front-end Endpoints

| Routes file | Path                       | Action                                            | 
| ----------- | -------------------------- |-------------------------------------------------- |
| Base 
|             | /                          | Render home page                                  |
|             | /contacto                  | Render contact page                               |
|             | /sobre-nosotros            | Render about us page                              |
| User                                                                                                          
|             | /registro                  | Render user register page                         |
|             | /iniciar-sesion            | Render user login page                            |
|             | /mi-perfil/:id             | Render user profile  page                         |
|             | /carrito                   | Render cart page                                  |
|             | /comprar                   | Render payment page                               |
| ADMIN
|             | /stock                     | Render total stcok page                           |
|             | /clientes                  | Render list of clients                            |
| Admin Bikes
|             | /bici/:id                  | Render bikes details page                         |
|             | /nueva-bici                | Render create bike page                           |
|             | /editar-bici/:id           | Render update bike page                           |
| Admin Shops
|             | /nuestras-tiendas          | Render all shops page                             |
|             | /nueva-tienda              | Render create shop page                           |
|             | /editar-tienda/:id         | Render update shop page                           |
