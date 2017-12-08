import { resetOilForm } from './oilForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setOils = oils => {
    return {
        type: 'GET_OILS_SUCCESS',
        oils
    }
}

const addOil = oil => {
    return {
        type: 'CREATE_OIL_SUCCESS',
        oil
    }
}

// ** Async Actions **
export const fetchOils = () => {
    return dispatch => {
        return fetch(`${API_URL}/oils`)
            .then(response => response.json())
            .then(oils => dispatch(setOils(oils)))
            .catch(error => console.log(error));
    }
}

export const createOil = oil => {
    const request = {
        method: 'POST',
        body: JSON.stringify({ oil: oil }),
        headers: {
          'Content-Type': 'application/json'
        }
    };

    return dispatch => {
        return fetch(`${API_URL}/oils`, request)
            .then(response => response.json())
            .then(oil => {
                dispatch(addOil(oil))
                dispatch(resetOilForm())
            })
            .catch(error => console.log(error));
    }
}