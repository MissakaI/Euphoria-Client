import * as actionTypes from '../types';

const axios = require('axios');

export const signInSuccess = () => {
    return {
        type: actionTypes.COUNSELOR_SIGN_IN
    };
};

export const signIn = (state) => dispatch => {
    console.log(state);

    return axios.post('http://localhost:8080/api/counselor/sign-in', JSON.stringify(state), {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        console.log(response);
        dispatch(signInSuccess());
    });

    // let url = 'http://localhost:8080/api/counselor/sign-in';
    // const headers = {
    //     "Content-Type": "application/json",
    // };
    // axios.post(url, JSON.stringify(state), {
    //     headers: headers
    // })
    //     .then(response => {
    //         console.log(response);
    //     }).catch(err => {
    //     console.log(err);
    // });



};

