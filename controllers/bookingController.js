'use strict';

const firebase = require('../db');
//const userRef = firebase.database().ref('type/')
const dbRef = firebase.database().ref();

const { upload } = require('../common/multer');
const e = require('express');

const addBooking = async (req, res) => {
    try {
        const data = req.body;
        let mGroupId = dbRef.child("booking").push().getKey();
        //console.log(newid)
        data.id = mGroupId

        console.log(data)
        await firebase.database().ref('booking/' + mGroupId).set(data);
        res.json({
            success: true,
            message: "Record Booked Successfully",
            data: data
        });
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

const getBooking = (req, res) => {
    try {
        dbRef.child("booking").get().then((snapshot) => {
            let typeids = Object.keys(snapshot.val())

            if (snapshot.exists()) {
                // let userids = Object.keys(snapshot.val())
                console.log(userids.length)
                res.json({
                    success: true,
                    data: (snapshot.val()),
                    ids: typeids
                });
            } else {
                res.send("No data available");
            }
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const editBooking = async (req, res) => {

    try {



        await dbRef.child("booking").child(req.params.id).update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            password: password
        })



        res.json({
            success: true,
            message: "Record updated Successfully",
        });

    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addBooking,
    getBooking,
    editBooking,
}