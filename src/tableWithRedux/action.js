import axios from "axios";
import {
  GET_TABLE_FAIL,
  GET_TABLE_REQUEST,
  GET_TABLE_SUCCESS,
  DELETE_ONE_ROW,
  ACTIVE,
  DESCRIPTION
} from "./constants";

export const getTableData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TABLE_REQUEST });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: GET_TABLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TABLE_FAIL, payload: error });
  }
};

export const deleteOneRow = (index) => (dispatch, getState) => {
  const newTable = [...getState().getTable.tableData];
  newTable.splice(index, 1);
  dispatch({ type: DELETE_ONE_ROW, payload: [...newTable] });
};

export const activePageAction = (x) => (dispatch, getState) => {
  dispatch({ type: ACTIVE, payload: x });
};


export const descriptionAction = (item) => (dispatch, getState) => {
  dispatch({ type: DESCRIPTION, payload: item });
};
