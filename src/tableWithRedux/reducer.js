import {
  GET_TABLE_FAIL,
  GET_TABLE_REQUEST,
  GET_TABLE_SUCCESS,
  DELETE_ONE_ROW,
  ACTIVE,
  DESCRIPTION
} from "./constants";

export const getTableReducer = (state = { tableData: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case GET_TABLE_REQUEST:
      return { ...state, loading: true };
    case GET_TABLE_SUCCESS:
      return { loading: false, tableData: action.payload };
    case GET_TABLE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DELETE_ONE_ROW:
      return { tableData: action.payload };
    default:
      return state;
  }
};

export const activePageReducer = (state = 1, action) => {
  switch (action.type) {
    case ACTIVE:
      return action.payload;
    default:
      return state;
  }
};

export const descriptionReducer = (state = [], action) => {
  switch (action.type) {
    case DESCRIPTION:
      return action.payload;
    default:
      return state;
  }
};
