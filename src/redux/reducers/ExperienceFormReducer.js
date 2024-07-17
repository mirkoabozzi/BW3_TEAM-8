import { ADD_EXPERIENCE_FAILURE, ADD_EXPERIENCE_REQUEST, ADD_EXPERIENCE_SUCCESS, UPDATE_EXPERIENCES_LIST } from "../actions";

const initialState = {
    loading: false,
    error: null,
    experiences: [],
};

const ExperienceFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPERIENCE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_EXPERIENCE_SUCCESS:
            return {
                ...state,
                loading: false,
                experience: action.payload, // salva l'esperienza aggiunta nel payload
            };
        case ADD_EXPERIENCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_EXPERIENCES_LIST:
            return {
                ...state,
                experiences: [...state.experiences, action.payload], // aggiunge l'esperienza alla lista
            };
        default:
            return state;
    }
};

export default ExperienceFormReducer