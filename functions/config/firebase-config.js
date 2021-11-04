 //initialize firebase vars and connection
 const admin = require('firebase-admin');
 const serviceAccount = require("./serviceAccountKey.json");
 admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: "https://idyll.firebaseio.com"
 });
 const db = admin.firestore();

 module.exports = admin;