'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();


const addUser = async (req, res) => {
    try {
        const data = req.body;
        await firebase.collection('users').doc().set(data);
        res.send("Record saved Successfully");
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser
}