const { postUser, login, logout } = require('./users');
const {
  createPost, getUserPosts, getPosts, deletePost,
} = require('./posts');

module.exports = {
  postUser, login, createPost, getPosts, getUserPosts, deletePost, logout,
};
