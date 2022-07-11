import { FETCH_PAGE, ADD_TASK } from "../types";

const initialState = { changed: false, listdata: {} };
const task = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default task;
