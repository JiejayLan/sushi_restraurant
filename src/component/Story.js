import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink
} from "mdbreact";


const Story= (props)=>{
    return (
        <div className="card container-fluid w-75">
            <div className="card-body">
                <h5 className="card-title flex-center">Our Story</h5>
                <p className="card-text">Modern contemporary environment serving traditional Japanese table dining, serving seasonal items from Japan. SUZUKI is comprised of Four VenuesOur Main Dining room featuring Kaiseki and Ala Carte and Entree menus. Toshio Suzuki, one of the pioneer sushi chefs in New York, has been satisfying the tastebuds of New Yorkers for over 40 years. The former owner chef of Sushi Zen, has honed his focus on serving what he has always wanted to serve; traditional Edomae-style Sushi Omakase.</p>

            </div>
        </div>
    )
};


// }
export default Story;