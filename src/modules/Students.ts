//import { Reducer } from "redux";
import axios from 'axios';
import { startLoading, finishLoading } from './Status';

// action type
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILED = 'AUTH_FAILED';

// state
const initialState = {
    userData: []
}

// reducer
export default function homeReducer(action: any, state: any = initialState){
    switch(action.type){
        case AUTH_SUCCESS:
            return {
                ...state,
                userData: action.userData
            }

        case AUTH_FAILED:
            return {
                ...state,
                userData: []
            }

        default:
            return state

    }
}

// action creator
export const authnication = () => {
    return (dispatch: any) => {
        dispatch(startLoading());
        axios.post('http://localhost/auth')
        .then(
            (res) => {
                dispatch(authSuccess(res.data));
            }
        ).catch(
            (error) => {
                dispatch(finishLoading());
                dispatch(authFailed(error));
            }
        )
    }
}

const authSuccess = (data: any) => {
    return {
        type: AUTH_SUCCESS,
        userData: data
    }
}

const authFailed = (error: any) => {
    return {
        type: AUTH_FAILED,
        error: error
    }
}