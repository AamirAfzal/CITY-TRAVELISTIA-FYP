const express = require('express');
const { addType, getType, editType } = require('../controllers/typeController');
const { upload } = require('../common/multer');

const router = express.Router();

router.post('/add', addType);
router.get('/get', getType);
router.put('/edit/:id', upload.single("picture"), editType);

module.exports = {
    routes: router
}