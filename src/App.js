import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Routes from './Routes';


function App() {
  return (
    <Provider store={store}>
        <React.Fragment>
          <Router history={createBrowserHistory()}>
            <Routes></Routes>
          </Router>
          {/* <SignIn></SignIn> */}
          {/* <HomePageUser></HomePageUser> */}
        </React.Fragment>
      

    </Provider>
  );
}

export default App;

