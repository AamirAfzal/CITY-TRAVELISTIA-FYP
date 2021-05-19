const express = require('express');
const { addUser, getUser, getUsers, editUser } = require('../controllers/userController');

const router = express.Router();

router.post('/add', addUser);
router.get('/get', getUser)
router.get('/gets', getUsers)
router.put('/edit', editUser);

module.exports = {
    routes: router
}