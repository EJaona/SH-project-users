import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'

export const ADDING_USER = 'ADDING_USER'
export const ADDED_USER = 'ADDED_USER'
export const ADD_USER_FAILED = 'ADD_USER_FAILED'

const baseUrl = 'http://localhost:8000/user'


export const fetchData = () => (dispatch) => {

    dispatch({type: FETCHING_DATA})

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => dispatch({type: FETCH_SUCCESS, payload: data}))
        .catch(err => dispatch({type: FETCH_FAILED}))
    
}


export const addUser = (user)  => (dispatch) => {

    dispatch({type: ADDING_USER})

    axios.post(baseUrl, user)
        .then(data => dispatch({type: ADDED_USER}))
        .catch(err => dispatch({type: ADD_USER_FAILED}))

    fetchData()

}

