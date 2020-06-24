import * as actionTypes from '../../actions/types';

const initialState = {
    signedIn: false,
    patientRecords: [],
    appointments:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case  actionTypes.COUNSELOR_SIGN_IN:
            return {
                ...state,
                signedIn: true
            };
        case actionTypes.GET_PATIENT_RECORDS:
            return {
                ...state,
                patientRecords: action.patientRecords
            };
        case actionTypes.GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.appointments
            };

        case actionTypes.GET_APPOINTMENTS:
            return {
                ...state,
                // appointments: action.appointments
            };
        default:
            return state;
    };
};
