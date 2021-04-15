import Posts from "../components/Posts/Posts";
import * as actionTypes from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...state, action.payload];
    case actionTypes.DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
