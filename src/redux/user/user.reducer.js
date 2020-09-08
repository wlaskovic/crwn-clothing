import UserActionTypes from './user.types';

// this is needed bcs on first load Redux doesn't know the value of state
const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;