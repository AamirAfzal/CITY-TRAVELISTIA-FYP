const express = require('express');
const { addUser, getUser, getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/add', addUser);
router.get('/get', getUser)
router.get('/gets', getUsers)

module.exports = {
    routes: router
}