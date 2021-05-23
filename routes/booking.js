const express = require('express');
const { addBooking, getBooking, editBooking, getUserBooking } = require('../controllers/bookingController');
const { upload } = require('../common/multer');

const router = express.Router();

router.post('/add', addBooking);
router.get('/get', getBooking);
router.put('/edit/:id', editBooking);
router.get('/getbyuser', getUserBooking)

module.exports = {
    routes: router
}