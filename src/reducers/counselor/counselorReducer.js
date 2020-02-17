import * as actionTypes from '../../actions/types';

const initialState = {
    signedIn: false,
    patientRecords: []
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
            }
        default:
            return state;
    }
    ;
};
