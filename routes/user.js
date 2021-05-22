const express = require('express');
const { addUser, getUser, getUsers, editUser, editPassword } = require('../controllers/userController');
const { upload } = require('../common/multer');

const router = express.Router();

router.post('/add', addUser);
router.get('/get', getUser)
router.get('/gets', getUsers)
router.put('/edit/:id', upload.single("picture"), editUser);
router.put('/changepassword/:id', editPassword);

module.exports = {
    routes: router
}