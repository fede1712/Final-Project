# Tricycle Project

## Project Description
Single page application
Aplicación web de comercio online para la venta de bicicletas de diseño electricas. La aplicación dispone



## Back-end Endpoints

| Routes file | Method                    | Endpoint                   | Action                                           | 
| ----------- | ------------------------- | ----------------           |------------------------------------------------- |
| User 
|             | POST                      | /auth/signup               | User register                                    |
|             | POST                      | /auth/login                | User login                                       |
|             | GET                       | /auth/logout               | User logout                                      |
|             | POST                      | /auth/myprofile/:id        | User profile                                     |
|             | DELETE                    | /auth/myprofile/:id/delete | Delete user profile                              |
|             | POST                      | /auth/isloggedin           | Check if user is logged in                       |
| Bikes
|             | GET                       | /bike/:id                  | Bikes details                                    |
|             | POST                      | /bike                      | Create Bike                                      |
|             | PUT                       | /bike/:id                  | Update Bike                                      |
|             | DELETE                    | /bike/:id                  | Delete Bike                                      |
| Shops
|             | GET                       | /shops                     | All shops                                        |
|             | POST                      | /shop                      | Create shop                                      |
|             | PUT                       | /shop/:id                  | Update shop                                      |
|             | DELETE                    | /shop/:id                  | Delete shop                                      |

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
