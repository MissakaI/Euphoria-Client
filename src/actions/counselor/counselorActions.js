import * as actionTypes from '../types';

const axios = require('axios');

export const signInSuccess = () => {
    return {
        type: actionTypes.COUNSELOR_SIGN_IN
    };
};


export const signUpSuccess = (response) => {
    return {
        type: actionTypes.COUNSELOR_SIGN_UP,
        response: response
    };
};

export const returnPatientRecords = (patientRecords) => {
    return {
        type: actionTypes.GET_PATIENT_RECORDS,
        patientRecords: patientRecords
    };
};

export const signIn = (state) => dispatch => {
    console.log(state);

    return axios.post('http://localhost:8080/authenticate', state, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
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


export const signUp = (state) => dispatch => {
    return axios.post(
        'http://localhost:8080/api/counselor/sign-up', JSON.stringify(state), {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
        dispatch(signUpSuccess(response))
    })
};

export const getPatientRecords = (user) => dispatch => {
    return axios.get('http://localhost:8080/api/counselor/patient-records/' + user,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            dispatch(returnPatientRecords(response))
    })
}

