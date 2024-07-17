import { SET_PROFILES_ASIDE, SET_PROFILES_ASIDE_ERROR } from "../actions";

const initialState = {
    profiles: [],
    error: null,
};

const asideProfilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILES_ASIDE:
            return {
                ...state,
                profiles: action.payload,
                error: null,
            };
        case SET_PROFILES_ASIDE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default asideProfilesReducer;