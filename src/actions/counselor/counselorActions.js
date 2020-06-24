import * as actionTypes from '../types';

const axios = require('axios').default;


// Check if user is logged in.
(function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
        // This means that there ISN'T JWT and no user is logged in.
        axios.defaults.headers.common.Authorization = null;
    } else {
        // This means that there IS a JWT so someone must be logged in.
        axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
})();

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

export const returnAppointment = (appointments) => {
    return {
        type: actionTypes.GET_APPOINTMENTS,
        appointments: appointments
    };
};


export const approvalAppointments = (appointment) => {
    return {
        type: actionTypes.APPROVE_APPOINTMENTS,
    };
};

export const signIn = (state) => dispatch => {
    console.log(state);
    axios.defaults.headers.common.Authorization = null;
    return axios.post('http://localhost:8080/authenticate', state, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then((response) => {
        console.log(response.data);
        localStorage.setItem("JWT", response.data.jwt);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.jwt;
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
};


export const getAppointments = (status) => dispatch => {
    axios.get('http://localhost:8080/api/counselor/appointments/' + status,
        {
            headers: {
                'Content-Type': 'application/json',
            }
    }).then((response) => {
        // dispatch(returnPatientRecords(response))
        return response.data;
    }).catch((err) => {
        return err
    })
};

export const updateAppointmentStatus = (id, status) => dispatch => {
    return axios.get('http://localhost:8090/api/counselor/appointments/' + id,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
        return response;
    })
};




