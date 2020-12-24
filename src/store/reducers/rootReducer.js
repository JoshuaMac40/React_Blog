import projectReducer from './projectReducer'
import authReducer from "./authreducer";
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"

const rootReducer = combineReducers({
    auth:authReducer,
    proj: projectReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer
})
export default rootReducer;