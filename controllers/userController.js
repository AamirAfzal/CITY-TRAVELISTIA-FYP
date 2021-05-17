'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.database();


const addUser = async (req, res) => {
    try {
        const data = req.body;
        let username = req.body.username;
        let id =
            console.log(data)
        await firebase.database().ref('users/' + username).set(data);
        res.send("Record saved Successfully");
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser
}