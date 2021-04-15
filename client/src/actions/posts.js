import * as api from "../api";
import * as actionTypes from "../constants/actionTypes";
// Actions Creators

export const getPosts = () => async (dispatch) => {
  try {
    // we get response, vori mej ka data
    const { data } = await api.fetchPosts();
    dispatch({
      type: actionTypes.FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    // we get response, vori mej ka data
    const { data } = await api.createPost(post);
    dispatch({ type: actionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: actionTypes.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
