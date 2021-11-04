const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const middleware = require('./middleware/middleEnd')

const app = express();
const port = 5000;

app.use(cors())

app.use(middleware.decodeToken)

app.get("/api/todos", (req, res) => {
    console.log(req.user);
    return res.json({
        todos : [
            {
                title: "Task1",
            },
            {
                title: "Task2",
            },
            {
                title: "Task3",
            },
        ],
    })
});

exports.server = functions.runWith({
    //minInstances: 2,
}).https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
