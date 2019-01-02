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
import "./style/Story.css";
import Navigationbar from "./Navigationbar";
import Carose from "./Carousel";
import LightBox from "./LightBox";
import Footerpage from "./Footer";

class Story extends Component {
    constructor(props) {
        super(props);
        this.state={
            showStory:false
        };
        this.handleScroll=this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        // if (window.scrollY >160 && window.scrollY <1000)
        //     this.setState({showStory:true});
        // else
        //     this.setState({showStory:false});
        ( window.scrollY< 900 && window.scrollY > 160 ) ? this.setState({showStory: true})
            : this.setState({showStory: false});
        console.log(window.scrollY)
    }

    render() {

        return (
            <div className="card container-fluid w-75 story" >

                <div className="card-body" >

                    <h5 className="card-title flex-center">Our Story</h5>
                    <div className={this.state.showStory ? "storyAppear" : "storyDisappear"} >
                    <p className="card-text">Modern contemporary environment serving traditional Japanese table dining, serving seasonal items from Japan. SUZUKI is comprised of Four VenuesOur Main Dining room featuring Kaiseki and Ala Carte and Entree menus. Toshio Suzuki, one of the pioneer sushi chefs in New York, has been satisfying the tastebuds of New Yorkers for over 40 years. The former owner chef of Sushi Zen, has honed his focus on serving what he has always wanted to serve; traditional Edomae-style Sushi Omakase.</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Story;