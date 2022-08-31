const router = require('express').Router();

const { postUser } = require('../controllers');

const verifyToken = require('../middlewares/verifyToken');

const login = require('./login');

// router.get('/home', verifyToken, (req, res) => {
//   res.send(req.token);
// });
router.post('/signup', postUser);

router.use(login);

module.exports = router;
