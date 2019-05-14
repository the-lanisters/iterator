import { GET_PROJECTS, GET_TASKS, SAVE_TASK, DELETE_TASK } from './types';

export const getProjects = () => dispatch => {
  fetch('http://localhost:3000/get-projects')
    .then(response => response.json)
    .then(projectsData =>
      dispatch({
        type: GET_PROJECTS,
        payload: projectData,
      }),
    );
};
