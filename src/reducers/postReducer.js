// import actions
import { SAVE_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
  projects: [],
  project: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projects: action.payload,
      };
      break;
    case 'DELETE_TASK':
      break;
    default:
      return state;
  }
};
