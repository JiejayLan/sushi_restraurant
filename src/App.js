import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink
} from "mdbreact";
import Navigationbar from "./component/Navigationbar.js"
import Story from "./component/Story.js"
import Footerpage from "./component/Footer.js"
import LightBox from "./component/LightBox.js"
import "./App.css";
import Carose from "./component/Carousel"





class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div id = "myapp" >
            <Navigationbar/>
            <Carose/>
            <Story/>
            <LightBox/>
            <img src={require("./component/sources/location.png")}
                 className="locationImage"
            />
            <img src={require("./component/sources/food13.png")}
                 className="foodImage"
            />
            <Footerpage/>
        </div>
    );
  }
}

export default App;
