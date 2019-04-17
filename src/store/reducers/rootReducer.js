//Let's import the reducers to be merged
import authReducer from './authReducer';
import projectReducer from './projectReducer';
//Let's import firestoreReducer
import {firestoreReducer} from 'redux-firestore';
//Let's import firebaseReducer
import {firebaseReducer} from 'react-redux-firebase';

//Let us call the combiner module.
import {combineReducers} from 'redux';

//Let's do the merge using combineReducer.
const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer