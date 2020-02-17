import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import s1 from '../../../assets/img/signup/s1.jpg';
export default class SignUpCarousel extends Component {
    
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={s1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        )
    }
}