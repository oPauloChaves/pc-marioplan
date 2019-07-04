const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log(action);
      return { ...state, authError: null };
    case "LOGIN_ERROR":
      console.log('error', action);
      return { ...state, authError: "Login Failed" };
    default:
      return state;
  }
};

export default authReducer;
