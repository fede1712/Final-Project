import React from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"
import imageCarousel1 from './carousel1.png'
import imageCarousel2 from './carousel2.png'
import imageCarousel3 from './carousel3.png'
import imageCarousel4 from './carousel4.png'
import imageCarousel5 from './carousel5.png'
import imageApp1B from './imgApp/app-card-leaderboard_768x@2x.png'
import imageApp2B from './imgApp/app-card-theft_768x@2x.png'
import imageApp3B from './imgApp/app-card-analysis_768x@2x.png'
import imageAppC from './imgApp/app--preview-homescreen_768x@2x.png'
import imageApp1D from './imgApp/app-card-summary_768x@2x.png'
import imageApp2D from './imgApp/app-card-weather_768x@2x.png'
import imageApp1E from './imgApp/app-card-nav_768x@2x.png'
import imageApp2E from './imgApp/app-card-battery_768x@2x.png'
import imageApp1F from './imgApp/app-card-air-quality_768x@2x.png'
import imageApp2F from './imgApp/app-card-calendar_768x@2x.png'
import imageApp3F from './imgApp/app-card-analysis-chart_768x@2x.png'


export default function Home(props) {

    let mobilescreens = document.querySelectorAll('.mouse-inertia'), speedVertical = 0, speedHorizontal = 0, spaceLeft;

    const applyScrollEffects = () => {


        document.querySelectorAll('.parallax').forEach(elm => {

            spaceLeft = elm.getBoundingClientRect().top

            elm.dataset.axis === 'vertical' ? speedVertical = elm.dataset.speed * spaceLeft : speedVertical = 0
            elm.dataset.axis === 'horizontal' ? speedHorizontal = elm.dataset.speed * spaceLeft : speedHorizontal = 0

            elm.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`
        })

        // Reveal effects
        document.querySelectorAll('.reveal').forEach(elm => {
            isInViewport(elm) ? elm.classList.add('visible') : elm.classList.remove('visible')
        })


        // Dynamic background generator
        document.querySelectorAll('.change-background').forEach(elm => {
            if (isInViewport(elm)) {
                document.querySelector('.fake-bg').style.backgroundColor = elm.dataset.color
                document.querySelector('.fake-bg').classList.add('on')
            } else {
                document.querySelector('.fake-bg').classList.remove('on')
            }
        })
    }

    document.addEventListener('scroll', applyScrollEffects)

    // Scroll navigation links
    const scrollButtons = document.querySelectorAll('.scrollto');
    scrollButtons.forEach(elm => {
        elm.onclick = e => {
            e.preventDefault()
            const href = elm.getAttribute('href')
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
        }
    })

    // Object viewport detection
    const isInViewport = el => {
        const rect = el.getBoundingClientRect()
        const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
        const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
        return (vertInView && horInView)
    }



    return (

        <div>
            <section className="heroImg">

                <div >

                    <Row className="alingItems">
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="h1Css">
                                <h1>Tricycle 4</h1>
                                <h3 className="heroImghH3">Un viaje suave y ágil.</h3>

                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-secondary buttonHero" variant="outline-secondary" to="/">Más información</Link>
                            </div>

                            <div className="mouse_scroll">

                                <div className="mouse">
                                    <div className="wheel"></div>
                                </div>
                                <div>
                                    <span className="m_scroll_arrows unu"></span>
                                    <span className="m_scroll_arrows doi"></span>
                                    <span className="m_scroll_arrows trei"></span>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>

                            <div className="buyNow">
                                <Link className="buyButtomLink" to="/">Compra ya tu Tricycle 4</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </Col>
                    </Row>

                </div>

            </section>

            <section className="heroImg2">

                <div >

                    <Row className="alingItems">
                        <Col md={{ span: 4, offset: 4 }}>
                            <div className="h1Css">
                                <h1>Tricycle 4 RS</h1>
                                <h3>Un marco abierto para una mente abierta.</h3>

                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-secondary buttonHero2" variant="outline-secondary" to="/">Más información</Link>
                            </div>

                        </Col>
                        <Col md={12}>

                            <div className="buyNow2">
                                <Link className="buyButtomLink" to="/">Compra ya tu Tricycle 4 RS</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-right arrow" viewBox="0 0 16 16" >
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </div>
                        </Col>
                    </Row>

                </div>

            </section>



            <Carousel>
                <Carousel.Item className="carousel-text" interval={5000}>
                    <img
                        className="d-block vw-100"
                        src={imageCarousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>Icono del diseño</h3>
                        <p>Todos los detalles se suman al aspecto icónico de Tricycle para un nuevo estándar de rendimiento.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block vw-100"
                        src={imageCarousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block vw-100"
                        src={imageCarousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={imageCarousel5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


            <div className="container-fluid section3">

                <Row xs="2">
                    <Col className="colSection3 reveal fadeInUp" data-delay="300s">
                        <div className="section3Img"></div>
                    </Col>
                    <Col className="colRightSection3 align-self-center reveal fadeInUp" data-delay="700s">
                        <h1>Tricycle 3</h1>
                        <h3>La conducción más rápida de la ciudad obtiene una alta puntuación por su chasis deportivo y ágil.</h3>
                        <div className="d-flex justify-content-center reveal fadeInUp" data-delay="600s">
                            <Link className="btn btn-secondary buttonSection3" variant="outline-secondary" to="/">Más información</Link>
                        </div>
                        <div className="reveal fadeInUp" data-delay="900s">
                            <p>6 pagos sin comisiones o 1.990 €.<br /> Plazo de entrega 10 días.</p>
                        </div>
                    </Col>

                </Row>

            </div>

            <section className="paddingSection">

                <Row>

                    <Col >
                        <Col >
                            <div className="reveal fadeInUp" data-delay="400s">
                                <h1 className="section4h1"> Es un gran día para pasear.</h1>
                            </div>

                            <div className="reveal fadeInUp" data-delay="600s">
                                <h3 className="section4h3">En el corazón de una Tricycle, está tu compañero de ruta. Conectado contigo y con cualquier camino que tomes.</h3>
                            </div>

                            <div className="d-flex justify-content-center reveal fadeInUp" data-delay="800s">
                                <Link className="btn btn-secondary buttonSection4" variant="outline-secondary" to="/">Descubre nuestra App</Link>
                            </div>

                        </Col>



                        <section className="">

                            <div class="appBox">

                                <Row className="d-flex justify-content-around">

                                    <Col className="col-md-auto padding2Sec parallax" data-axis="vertical" data-speed=".3">
                                        <div>
                                            <img className="imgApp" src={imageApp1B} alt="App img 3" />
                                        </div>
                                        <div>
                                            <img className="imgApp" src={imageApp2B} alt="App img 4" />
                                        </div>
                                        <div>
                                            <img className="imgApp" src={imageApp3B} alt="App img 3" />
                                        </div>


                                    </Col>

                                    <Col className="col-md-auto padding3Sec parallax" data-axis="vertical" data-speed=".2">
                                        <div>
                                            <img className="imgApp" src={imageApp1D} alt="App img 5" />
                                        </div>
                                        <div>
                                            <img className="imgApp" src={imageApp2D} alt="App img 6" />
                                        </div>

                                    </Col>

                                    <Col className="col-md-auto">
                                        <div>
                                            <img className="imgAppMobile" src={imageAppC} alt="App img Mobile" />
                                        </div>

                                    </Col>


                                    <Col className="col-md-auto padding4Sec parallax" data-axis="vertical" data-speed=".2">
                                        <div>
                                            <img className="imgApp" src={imageApp1E} alt="App img 7" />
                                        </div>
                                        <div>
                                            <img className="imgApp" src={imageApp2E} alt="App img 8" />
                                        </div>

                                    </Col>

                                    <Col className="col-md-auto padding5Sec parallax" data-axis="vertical" data-speed=".3">
                                        <div>
                                            <img className="imgApp" src={imageApp1F} alt="App img 9" />
                                        </div>
                                        <div>
                                            <img className="imgApp" src={imageApp2F} alt="App img 10" />
                                        </div>
                                        <div>
                                            <img className="imgApp" src={imageApp3F} alt="App img 11" />
                                        </div>

                                    </Col>

                                </Row>
                            </div>
                        </section>
                    </Col>




                </Row>



            </section>

        </div >


    )
}