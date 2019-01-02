import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBMask, MDBView,MDBBtn } from "mdbreact";
import Pdf from "./sources/menu.pdf";


class Menu extends React.Component {
    render() {

        return (
            <div >

                <MDBBtn href = {Pdf} size="sm" outline color="info">Info</MDBBtn>

            </div>

        );
    }
}

export default Menu;

