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
import GridFood from "./component/GridFood.js"
import "./index.css";
import Carose from "./component/CarouselComponent"
import Routes from "./Routes";
import Menu from "./component/menu"




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
            <GridFood/>
            <img src={require("./component/sources/food13.png")}
                 className="foodImage"
            />
            <Menu/>
            <Footerpage/>



        </div>



    );
  }
}

export default App;
