import React, {Component} from 'react';


import Feed from './Feed';


import {UserLayout} from '../../components/user/UserLayout';
import NavbarUser from '../../components/user/NavbarUser';
import {Jumbotron} from '../../components/user/Jumbotron';

export default class HomePageUser extends Component {
  render() {
    return (
       <React.Fragment>
        <NavbarUser></NavbarUser>
        <Jumbotron></Jumbotron>
        <UserLayout>
            <Feed></Feed>
        </UserLayout>
      </React.Fragment>
    )
  }
}
