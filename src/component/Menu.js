import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBMask, MDBView,MDBBtn } from "mdbreact";
import Pdf from "./sources/menu.pdf";
import Navigationbar from "./Navigationbar.js"
import Footerpage from "./Footer.js"
import Carousel from "nuka-carousel";
import "./style/menu.css"

class Menu extends React.Component {
    render() {

        return (
            <div >
                <Navigationbar/>

                <img src={require("./sources/fish.png")} className="fish"/>
                <div className="container">
                    <div className="title">HOT APPETIZERS</div>
                    <div className="row">
                        <div className="col-4">Edamame</div>
                        <div className="col-4">Tatsuta Age</div>
                        <div className="col-4">Goma Ae</div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">Sauteed Organic Mushrooms</div>
                        <div className="col-sm-4">Beef Negimaki</div>
                        <div className="col-sm-4">Tuna Avocado</div>
                    </div>

                    <div className="row" >
                        <div className="col-md-4">Sakura Shumai</div>
                        <div className="col-md-4">Gindara Kasuzuke</div>
                        <div className="col-md-4">Toro Tartare</div>
                    </div>

                    <div className="title">SALADS</div>
                    <div className="row">
                        <div className="col-lg-4">Small Salad</div>
                        <div className="col-lg-4">Seaweed Salad</div>
                        <div className="col-lg-4">Yaki-Shabu Salad</div>
                    </div>
                    <div className="title">SOUPS</div>
                    <div className="row">
                        <div className="col-xl-4">Miso</div>
                        <div className="col-xl-4">Clear</div>
                        <div className="col-xl-4">Akadashi Miso</div>
                    </div>
                </div>

                <MDBBtn href = {Pdf} size="sm" outline className = "infobutton" color="blue-grey" >Full Menu</MDBBtn>
                <Footerpage/>

            </div>

        );
    }
}

export default Menu;

