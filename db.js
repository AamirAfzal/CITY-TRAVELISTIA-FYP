const firebase = require('firebase');
const config = require('./config');

const db = firebase.initializApp(config.firebaseConfig)

module.exports = db;