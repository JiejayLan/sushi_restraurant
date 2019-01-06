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
import {envelopeO} from 'react-icons-kit/fa/envelopeO'
import {facebook} from 'react-icons-kit/fa/facebook'
import {instagram} from 'react-icons-kit/fa/instagram'
import { Icon } from 'react-icons-kit'
import {twitter} from 'react-icons-kit/fa/twitter'

const Footerpage= (props)=>{
    return (
        <div>

            <div className="media">

                <div className="mediaLink" href="http://www.facebook.com/453227458173245" target="_blank">
                    <Icon icon={facebook} size={30}/>
                </div>


                <div className="mediaLink" href="https://twitter.com/SushiYasaka" target="_blank" >
                    <Icon icon={twitter} size={30}/>
                </div>


                <div  className="mediaLink"  href="http://instagram.com/sushiyasaka" target="_blank" >
                    <Icon icon={instagram} size={30}/>
                </div>


                <adiv className="mediaLink" href="mailto:sushiyasakanyc@gmail.com" target="_blank" >
                    <Icon icon={envelopeO} size={30}/>
                </adiv>


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