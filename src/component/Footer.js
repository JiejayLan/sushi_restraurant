import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    Footer,
    NavItem,
    NavLink
} from "mdbreact";
import "./style/footer.css"

const Footerpage= (props)=>{
    return (
        <div>

            <div className="media">
                <a href="http://www.facebook.com/453227458173245" target="_blank">
                    <div>
                        facebook
                    </div>
                </a>
                <a href="https://twitter.com/SushiYasaka" target="_blank" >
                    <div>
                        twitter
                    </div>
                </a>
                <a href="http://instagram.com/sushiyasaka" target="_blank" >
                    <div >
                        isntagram
                    </div>
                </a>
                <a href="mailto:sushiyasakanyc@gmail.com" target="_blank" >
                    <div>
                        email
                    </div>
                </a>

            </div>

            <div  className="address" color="elegant-color">

                <br/>
                <div >SUSHI YASAKA, 251 W 72ND ST, NEW YORK, NY, 10023, UNITED STATES(212) 496-8460 SUSHIYASAKANYC@GMAIL.COM</div>

            </div>
        </div>
    )
};


// }
export default Footerpage;