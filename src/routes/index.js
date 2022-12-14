const router = require('express').Router();

const signup = require('./signup');
const login = require('./login');
const addPost = require('./addPost');
const getUserPosts = require('./getUserPosts');
const getPosts = require('./getPosts');
const addUserImage = require('./userImage');
const logout = require('./logout');
const home = require('./home');
const { serverError, userError } = require('../errors');

router.use(addPost);
router.use(signup);
router.use(getPosts);
router.use(login);
router.use(getUserPosts);
router.use(addUserImage);
router.use(logout);
router.use(home);

router.use(userError);
router.use(serverError);

module.exports = router;
