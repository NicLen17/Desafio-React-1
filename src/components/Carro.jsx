import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carro.css';

export default function Carro() {
    return (
        <div>
            <Carousel className="Carro">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://okdiario.com/img/2020/04/08/fechas-de-todos-los-estrenos-de-marvel-entre-2020-y-2022.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Avengers</h3>
                        <p>La saga de Los Vengadores es una saga de cuatro películas que se inició en el año 2012 con la película The Avengers y finalizó con Avengers: Endgame.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://rockandfilms.es/wp-content/uploads/2021/04/Godzilla-vs-Kong-1024x474-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>King Kong vs Godzilla</h3>
                        <p>Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.blogs.es/558680/justiceleague1/1366_2000.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Justice League</h3>
                        <p>La Liga de la Justicia de Zack Snyder​​, comúnmente conocida como «Snyder Cut», es una versión del director de la película estadounidense de superhéroes del mismo nombre de 2017, la quinta película del Universo extendido de DC y basada en el equipo de superhéroes del mismo nombre de DC Comics.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

