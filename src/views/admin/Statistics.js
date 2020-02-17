import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import {Container} from 'react-bootstrap';
import DistrictStat from './Stats/DistrictStat';
import GenderStat from './Stats/GenderStat';
import YearStat from './Stats/YearStat';
import EmotionStat from './Stats/EmotionStat';
import NavBarLandingPage from '../../components/NavBarLandingPage';

import EqualizerIcon from '@material-ui/icons/Equalizer';
export default class Statistics extends Component {
      constructor(){
            super();
            this.state = {
                
            }
    }

  render() {

    return (
       <React.Fragment>
        <NavBarLandingPage></NavBarLandingPage>
        <Grid container spacing={3}>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >   
                    <h3 style={{marginTop:'50px'}}>Statistical Analysis Euphoria <EqualizerIcon></EqualizerIcon></h3>
            
            </Grid>


                <Grid  
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{marginTop:'100px'}}

                >           
                        <Grid item xs={12}  sm={6}>
                            <DistrictStat ></DistrictStat>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <GenderStat></GenderStat>
                        </Grid>
                        

                </Grid>

                <Grid  
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    style={{marginTop:'300px',marginBottom:'300px'}}
                >
                        <Grid  item xs={12} sm={6}>
                            <YearStat></YearStat>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EmotionStat></EmotionStat>
                        </Grid>

                </Grid>

        </Grid>
       </React.Fragment>         
    )
  }
}
