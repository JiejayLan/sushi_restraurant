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
import { BrowserRouter as Router, Route,Switch , Link} from "react-router-dom";
import "../index.css";
import "./style/navigation.css";


import Routes from "../Routes";

class Navigationbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: ""
        };
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    closeCollapse = collapseID => () =>
        this.state.collapseID === collapseID && this.setState({ collapseID: "" });

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
        );
        return (

            <div className="flyout navigation">
                <Navbar color="elegant-color" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/building-vol-2/512/restaurant-512.png"
                            alt=""
                            className="image"

                        />{" "}
                        小肥羊寿司店
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.toggleCollapse("mainNavbarCollapse")}
                    />
                    <Collapse
                        id="mainNavbarCollapse"
                        isOpen={this.state.collapseID}
                        navbar
                    >
                        <NavbarNav right>
                            <NavItem>
                                <NavLink

                                    to="/"
                                    onClick={this.closeCollapse("mainNavbarCollapse")}
                                >
                                    HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={this.closeCollapse("mainNavbarCollapse")}
                                    to="/menu"


                                >
                                  OUR STORY
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={this.closeCollapse("mainNavbarCollapse")}
                                    to="/menu"



                                >
                                    MENU
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={this.closeCollapse("mainNavbarCollapse")}
                                    to="/order"

                                >
                                    RESERVATION
                                </NavLink>
                            </NavItem>


                        </NavbarNav>
                    </Collapse>
                </Navbar>
                {this.state.collapseID && overlay}

            </div>


        );
    }
}

export default Navigationbar ;
