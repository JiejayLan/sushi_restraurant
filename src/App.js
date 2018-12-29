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
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
        <div>
            <Navigationbar/>
            <Footer color="indigo">
                <p className="footer-copyright mb-0 py-3 text-center">
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                </p>
            </Footer>
        </div>



    );
  }
}

export default App;
