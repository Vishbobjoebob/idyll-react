const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const admin = require('./config/firebase-config')
const middleware = require('./middleware')

const app = express();
const db = admin.firestore();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'hey'})
})

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello!'})
})

app.use(middleware.decodeToken)

app.get("/api/auth", (req, res) => {;
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

app.post('/api/signup', (req, res) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;

    const auth = req.user;
    if (auth) {
        (async () => {
            try {
            await db.collection('users').doc(String(email)).set({
                email: email,
                firstName: firstName,
                lastName: lastName,
                username: username,
                phoneNumber: phoneNumber
            }).then(()=>{
                console.log("Lets go baby")
            });
            return res.status(200).send();
            } catch (error) {
            console.log(error);
            return res.status(500).send(error);
            }
        })();
    }
    else {
        return res.json({message: 'Unauthorized'});
    }
  });

exports.server = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
