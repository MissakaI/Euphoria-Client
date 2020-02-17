import React, { Component } from 'react';

import PostBodyUser from '../../components/user/PostBodyUser';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';


import Feed from './Feed';
import UserHome from './UserHome';
import Counselors from './Counselors';
import NoMatch from './NoMatch';


import {UserLayout} from '../../components/user/UserLayout';
import NavbarUser from '../../components/user/NavbarUser';
import { Jumbotron } from '../../components/user/Jumbotron';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Routes from '../../Routes';
export default class HomePageUser extends Component {
  render() {
    return (
       <React.Fragment>
        <NavbarUser></NavbarUser>
        <Jumbotron></Jumbotron>
        <UserLayout>
            <UserHome></UserHome>
        </UserLayout>
      </React.Fragment>
    )
  }
}
