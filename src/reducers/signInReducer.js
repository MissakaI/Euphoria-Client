import {SIGN_IN,SIGN_UP} from '../actions/types';

const initialState = {
    signedIn:false
}

export default function (state=initialState,action){
    switch(action.type){
        case SIGN_IN : 
            return {
                ...state,
                signedIn : true
            };
        case SIGN_UP :
            return {
                ...state,
                signedUp : true
            };
        default: 
            return state;
    }
}