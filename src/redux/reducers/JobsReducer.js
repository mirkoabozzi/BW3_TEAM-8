import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "../actions"

const initialState = {
    loading: false,
    error: null,
    jobs: [],
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
            };
        default:
            return state;
    }
};

export default jobsReducer;