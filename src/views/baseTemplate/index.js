import React from "react";
import {MDBNavbar, MDBNavbarBrand} from "mdbreact";

class Template{
    return(){
        render({
            <MDBNavbar
                color="unique-color-dark"
                style={{ marginTop: "20px" }}
                dark
            >
                <MDBNavbarBrand href="#">
                    <img
                        src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                        height="30"
                        alt=""
                    />
                </MDBNavbarBrand>
            </MDBNavbar>
        });
    }
}