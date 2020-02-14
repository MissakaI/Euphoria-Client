import React from "react";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import {MDBNavbar, MDBNavbarBrand} from "mdbreact";

class TemplateHeader extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <MDBNavbar>
                    <MDBNavbarBrand>

                    </MDBNavbarBrand>
                </MDBNavbar>
            </BrowserRouter>
        );
    }
}