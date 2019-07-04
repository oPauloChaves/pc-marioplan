const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success", action);
      return { ...state, authError: null };
    case "LOGIN_ERROR":
      console.log("login error", action);
      return { ...state, authError: "Login Failed" };
    case "SIGNOUT_SUCCESS":
      console.log("signout success", action);
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success", action);
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      console.log("signup error", action);
      return { ...state, authError: action.error.message };
    default:
      return state;
  }
};

export default authReducer;
