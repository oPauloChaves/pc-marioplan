const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content:
        "Dolor et minima dignissimos alias sapiente quia. Eius veniam aliquid esse veniam quam.",
      date: "3rd September, 2am"
    },
    {
      id: "2",
      title: "collect all the stars",
      content:
        "Dolor et minima dignissimos alias sapiente quia. Eius veniam aliquid esse veniam quam.",
      date: "3rd September, 2am"
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content:
        "Dolor et minima dignissimos alias sapiente quia. Eius veniam aliquid esse veniam quam.",
      date: "3rd September, 2am"
    },
    {
      id: "4",
      title: "go to next stage",
      content:
        "Dolor et minima dignissimos alias sapiente quia. Eius veniam aliquid esse veniam quam.",
      date: "3rd September, 2am"
    }
  ]
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
    default:
      return state;
  }
};

export default projectReducer;
