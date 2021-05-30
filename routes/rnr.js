const express = require('express');
const { addRnR, getRnR, editRnR, getUserRnR } = require('../controllers/rnrController');
const { upload } = require('../common/multer');

const router = express.Router();

router.post('/add', addRnR);
router.get('/get', getRnR);
router.put('/edit/:id', editRnR);
router.get('/getbyuser/:id', getUserRnR)

module.exports = {
    routes: router
}