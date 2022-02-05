const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require('./config/firebase-config');
const middleware = require('./middleware');
const algoliasearch = require('algoliasearch');

const app = express();
const db = admin.firestore();
const port = process.env.PORT || 5000;
const env = functions.config();

const algoliaClient = algoliasearch(env.algolia.app_id, env.algolia.admin_api_key);
const searchIndex = algoliaClient.initIndex('searchPosts');
const sellerIndex = algoliaClient.initIndex('searchSellers');

app.use(cors())
app.use(express.json());
app.use("/api", middleware.decodeToken)

app.get('/', (req, res) => {
    res.json({message: 'hey'})
})

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello!'})
})

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

app.get('/api/getData', (req, res)=>{
    const auth = req.user;

    if (auth) {
        (async () => {
            try {
            await db.collection('users').doc(String(auth.email)).get().then((doc =>{
                if (doc.exists) {
                    const firstName = doc.data()['firstName']
                    const lastName = doc.data()['lastName']
                    const username = doc.data()['username']
                    const phoneNumber = doc.data()['phoneNumber']
                    console.log(firstName);
                    return res.json({
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        phoneNumber: phoneNumber
                    })
                    
                } else {
                    return res.json({message: 'Doc does not exist'})
                }
            }))
            } catch (error) {
            console.log(error);
            return res.status(500).send(error);
            }
        })();
    }
    else {
        return res.json({message: 'Unauthorized'});
    }
})

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

  app.post('/api/uploadPost', (req, res) => {
    const dishName = req.body.dishName;
    const dishDescription = req.body.dishDescription;
    const dishRestrictions = req.body.dishRestrictions;
    const dishPrice = req.body.dishPrice;
    const dishType = req.body.type;
    const cuisine = req.body.cuisine;
    const waitTime = req.body.waitTime;
    const servings = req.body.servings;
    const dropOff = req.body.dropOff;
    const additionalComments = req.body.additionalComments;
    const cooked = req.body.cooked;
    const zipCode = req.body.zipCode.substring(0,3);
    const pictureURLs = req.body.pictureURLs;
    const userData = req.body.userData;

    const d = new Date();
    let isoTime = d.toISOString();

    let dishObject = {
        dishName: dishName,
        dishDescription: dishDescription,
        dishRestrictions: dishRestrictions,
        dishPrice: dishPrice,
        dishType: dishType,
        cuisine: cuisine,
        waitTime: waitTime,
        servings: servings,
        dropOff: dropOff,
        additionalComments: additionalComments,
        cooked: cooked,
        pictureURLs: pictureURLs,
        timeUploaded: isoTime,
        zipCode: zipCode
    }

    console.log(dishObject);

    console.log('before auth')
    const auth = req.user;

    if (auth) {
        console.log('in auth');

        userData.uid = auth.uid;
        userData.email = auth.email;

        dishObject.userData = userData;
        dishObject.fullName = userData.lastName + ", " + userData.firstName;

        (async() => {
            try {
                const mainPostDocRef = await db.collection('posts').doc(`!${zipCode.substring(0,3)}!`).collection('items').add(dishObject);
                const searchPostDocRef = await db.collection('searchPosts').doc(mainPostDocRef.id).set(dishObject);
                return res.status(200).send({"success": true});
                } catch (error) {
                console.log(error);
                return res.status(200).send({"success": false});
                }
        })();
    } else {
        return res.json({message: 'Unauthorized'});
    }
});

app.get('/getPost/:zipCode/:id', (req, res) => {
    const id = req.params.id;
    const zipCode = req.params.zipCode;

    (async () => {
        try {
            await db.collection('posts').doc(`!${zipCode.substring(0,3)}!`).collection('items').doc(id).get().then((doc) => {
                return res.json(doc.data());
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

app.get('/getBrowseData/:zipcode', (req, res) => {
    const zip = req.params.zipcode;
    const area = zip.substring(0,3);

    var categoryItems = {
        items:[]
    };
    (async () => {
        try {
            await db.collection('posts').doc(`!${String(area)}!`).collection("items").get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=> {
                    if (doc.exists) {
                        const additionalComments = doc.data()['additionalComments'];
                        const cooked = doc.data()['cooked'];
                        const cuisine = doc.data()['cuisine'];
                        const dishDescription = doc.data()['dishDescription'];
                        const dishName = doc.data()['dishName'];
                        const dishPrice = doc.data()['dishPrice'];
                        const dishRestrictions = doc.data()['dishRestrictions'];
                        const dishType = doc.data()['dishType'];
                        const dropOff = doc.data()['dropOff'];
                        const servings = doc.data()['servings'];
                        const waitTime = doc.data()['waitTime'];
                        const pictureURLs = doc.data()['pictureURLs'];

                        var itemJSON = {
                            additionalComments : additionalComments,
                            cooked : cooked,
                            cuisine : cuisine,
                            dishDescription : dishDescription,
                            dishName : dishName,
                            dishPrice : dishPrice,
                            dishRestrictions : dishRestrictions,
                            dishType : dishType,
                            dropOff : dropOff,
                            servings : servings,
                            waitTime : waitTime,
                            pictureURLs : pictureURLs,
                            id: doc.id
                        }
                        categoryItems.items.push(itemJSON);
                    } else {
                        console.log("doc does not exist");
                    }
                })
                if (categoryItems.items.length > 0) { 
                    return res.status(200).send(categoryItems);
                } else {
                    console.log("No items found");
                    return res.status(200).send({message: "No items found"});
                }
                
            })
        } 
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
})

exports.onPostCreated = functions.firestore.document('searchPosts/{postId}').onCreate(((snap, ctx) => {
    return searchIndex.save0bject({
        objectID: snap.id,
        ...snap.data()
    });
}))

exports.onPostDeleted = functions.firestore.document('searchPosts/{postId}').onDelete(((snap, ctx) => {
    return searchIndex.deleteObject(snap.id);
}))

exports.onSellerCreated = functions.firestore.document('searchSellers/{sellerId}').onCreate(((snap, ctx) => {
    return sellerIndex.save0bject({
        objectID: snap.id,
        ...snap.data()
    });
}))

exports.onSellerDeleted = functions.firestore.document('searchSellers/{sellerId}').onDelete(((snap, ctx) => {
    return sellerIndex.deleteObject(snap.id);
}))
exports.server = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
