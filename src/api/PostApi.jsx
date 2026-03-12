import axios from "axios";

// 1st step create base -> instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = (page = 1, limit = 10) => {
  return api.get("/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};
// delete method
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
// add the data-> post method
export const adData = (post) => {
  return api.post("/posts", post);
};
// update the data-> put method
export const updatePost = (id, updateData) => {
  return api.put(`/posts/${id}`, updateData);
};
