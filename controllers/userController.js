'use strict';

const firebase = require('../db');
const User = require('../models/user');
const userRef = firebase.database().ref('users/')
const dbRef = firebase.database().ref();

const addUser = async (req, res) => {
    try {
        const data = req.body;
        let mGroupId = dbRef.child("users").push().getKey();
        //console.log(newid)
        data.id = mGroupId

        console.log(data)
        await firebase.database().ref('users/' + mGroupId).set(data);
        res.json({
            success: true,
            message: "Record saved Successfully",
            data: data
        });
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

const getUser = (req, res) => {
    try {
        dbRef.child("users").get().then((snapshot) => {
            let userids = Object.keys(snapshot.val())
            for (let i = 0; i < userids.length; i = i + 1) {
                dbRef.child("users").child(userids[i]).child("email").get().then((snapshot2) => {
                    console.log(snapshot2.val())
                })
            }
            if (snapshot.exists()) {
                // let userids = Object.keys(snapshot.val())
                console.log(userids.length)
                res.json({
                    success: true,
                    data: (snapshot.val()),
                    ids: userids
                });
            } else {
                res.send("No data available");
            }
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const getUsers = (req, res) => {

    try {
        let mGroupId;

        dbRef.child("users/").once('value').then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.getChildren().iterator().next().getKey())

                mGroupId = dbRef.child("users").push().getKey();
                console.log(mGroupId);
                res.send((snapshot.val()));
            } else {
                res.send("No data available");
            }
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addUser,
    getUser,
    getUsers
}