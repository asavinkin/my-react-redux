import {CHANGE_FIRST_NAME, CHANGE_SECOND_NAME} from "../constants/actions";

const initialState = {
    firstName: '',
    secondName: ''
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case CHANGE_SECOND_NAME:
            return {
                ...state,
                secondName: action.payload
            };
    }
    return state
};