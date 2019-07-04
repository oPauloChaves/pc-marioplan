export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Chaves",
        authorId: "123456",
        createdAt: Date.now()
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
