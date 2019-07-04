export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;

    getFirestore()
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
      })
      .then(result => {
        project.id = result.id;
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(error => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};
