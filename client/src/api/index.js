import axios from "axios";

const url = "https://picutre-upload.herokuapp.com/";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
