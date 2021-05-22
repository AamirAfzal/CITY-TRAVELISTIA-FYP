const express = require('express');
const { addPlace, getPlace, editPlace } = require('../controllers/placesController');
const { upload } = require('../common/multer');

const router = express.Router();

router.post('/add', addPlace);
router.get('/get', getPlace);
router.put('/edit/:id', editPlace);

module.exports = {
    routes: router
}