import {CHANGE_FIRST_NAME, CHANGE_SECOND_NAME} from "../constants/actions";

export const changeFirstName = (firstName) => {
    console.log('Changed first name: ', firstName);
    return {
        type: CHANGE_FIRST_NAME,
        payload: firstName
    }
};
export const changeSecondName = (secondName) => {
    return {
        type: CHANGE_SECOND_NAME,
        payload: secondName
    }
};