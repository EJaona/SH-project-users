import { FETCHING_DATA, FETCH_SUCCESS, FETCH_FAILED, ADDING_USER, ADDED_USER, ADD_USER_FAILED} from '../actions/index';

const initialState = {

    user: {

        name: '',
        age: '',
        gender: '',
    },

    users: []
}



export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
            
    }
}