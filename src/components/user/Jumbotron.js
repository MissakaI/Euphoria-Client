import React from 'react';
import {Container, Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import welcomeImage from '../../assets/img/welcome.jpg';

const Styles=styled.div`
    .jumbotron {
        background : url(${welcomeImage})no-repeat fixed bottom;
        background-size:cover;
        color:#ccc;
        height:200px;
        position:relative;
        z-index:-2;
    }
    .overlay{
        background-color:#000;
        opacity:0.6;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
`;
export const Jumbotron = () =>{
    return(
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>The only journey is the journey within!</h1>
                </Container>
            </Jumbo>
        </Styles>

    );
}
