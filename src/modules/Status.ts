//import { Reducer } from "redux";

// action type
const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';

// state
const initialState = {
    isLoading: false,
}

// reducer
export default function statusReducer(action: any, state:any = initialState){
    switch(action.type){
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            }
            
        default: 
            return state
    }
}

// action creator
export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const finishLoading = () => {
    return {
        type: FINISH_LOADING
    }
}