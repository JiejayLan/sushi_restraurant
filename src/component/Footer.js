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


const Footerpage= (props)=>{
    return (
        <Footer background-color="rgba(0, 0, 0, 0.1)">
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://github.com/JiejayLan/restaurant"> Bida Chen/ Jie Lan</a>
            </p>
        </Footer>
    )
};


// }
export default Footerpage;