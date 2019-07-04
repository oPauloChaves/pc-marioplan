export const signIn = ({ credentials, firebase }) => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const signOut = firebase => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS" });
    });
};

export const signUp = (newUser, firebase) => (
  dispatch,
  getState,
  { getFirestore }
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(resp =>
      getFirestore()
        .collection("users")
        .doc(resp.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
        })
    )
    .then(() => {
      dispatch({ type: "SIGNUP_SUCCESS" });
    })
    .catch(error => {
      dispatch({ type: "SIGNUP_ERROR", error });
    });
};
