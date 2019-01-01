import React from 'react';
import Carousel from 'nuka-carousel';
import "./style/Carousel.css";

export default class extends React.Component {
    render() {
        return (
            <Carousel>
                <img src={require("./sources/image1.jpg")}/>
                <img src={require("./sources/food2.png")}/>
                <img src={require("./sources/food10.jpg")}/>
                <img src={require("./sources/food11.jpg")}/>
            </Carousel>
        );
    }
}