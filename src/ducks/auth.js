import firebase from 'firebase';
import {appName} from '../config'
import {Record} from 'immutable'

const ReducerRecord = Record({
    user: null,
    error: null,
    loading: false
});

export const moduleName = 'auth';
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`;


/*Reducer*/
export default function reducer(state = new ReducerRecord(), action) {

    return state;

}


export function signUp(email, password) {
    return (dispatch) => {
        dispatch({
            type: SIGN_UP_REQUEST
        })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: SIGN_UP_SUCCESS,
                payload: {user}
            }))
            .catch(error => dispatch({
                type: SIGN_UP_ERROR,
                error
            }))
    }
}

firebase.auth().onAuthStateChanged(user => {
    const store = require('../redux').default
    store.dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {user}
    })
})
