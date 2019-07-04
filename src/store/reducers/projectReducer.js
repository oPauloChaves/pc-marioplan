const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [
          ...state.projects,
          { id: state.projects.length + 1, ...action.project }
        ]
      };
    case "CREATE_PROJECT_ERROR":
      console.error(action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
