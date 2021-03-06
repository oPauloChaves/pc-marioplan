import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  getFirestore,
  createFirestoreInstance,
  reduxFirestore
} from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";

import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers/rootReducer";
import firebase from "./config/firebaseConfig";
import * as serviceWorker from "./serviceWorker";

// We enhance compose in order to use Redux DevTools extension
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// https://github.com/Sv1nnet/mario-plan-migrated-on-redux601-and-firebase300-alpha
// Create config for rrfProps object. We need this to pass it in the ReactReduxFirebaseProvider component
const rrfConfig = {
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  userProfile: "users", // set state.firebase.profile with firestore `users` collection
  attachAuthIsReady: true
};

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // still need this line to get access to firestore via getFirestore function (in projectActions, for example)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // Create firestore instead of craete it in fbConfig.js
};

// Don't render to the DOM until firebase auth is ready
// https://github.com/prescottprue/react-redux-firebase/issues/631
let unsubscribe = firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
  unsubscribe();
});
