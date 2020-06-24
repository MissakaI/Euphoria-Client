import React from 'react';
import {Jumbotron as Jumbo,Container} from 'react-bootstrap';
import styled from 'styled-components';
import welcomeImage from '../../assets/img/welcome.jpg';

const Styles=styled.div`
    .jumbotron {
        background : url(${welcomeImage})no-repeat center center;
        background-size:cover;
        color:#ccc;
        width:100%;
        height: 300px
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
    // .d {
    //     background : url(${welcomeImage})no-repeat center center;
    //     position: fixed;
    //     width: 100%;
    //     height: 350px; /*same height as jumbotron */
    //     top:0;
    //     left:0;
    //     z-index: -1;
        
    // }
    // .dw{
    //     margin-bottom: 0px;
    //     height: 350px;
    //     color: white;
    //     text-shadow: black 0.3em 0.3em 0.3em;
    //     background:transparent;
    // }
`;
export const Jumbotron = () =>{
    return(
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1 style={{textAlign:'center',marginTop:'100px'}}>The only journey is the journey within!</h1>
                </Container>
            </Jumbo>
        </Styles>

    );
}
