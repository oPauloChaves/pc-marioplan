import { combineReducers } from "redux";
// sync firestore date with our store date in the background
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  firestore: firestoreReducer,
  // sync auth state in firebase
  firebase: firebaseReducer
});
