import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
// sync firestore date with our store date in the background
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  firestore: firestoreReducer
});
