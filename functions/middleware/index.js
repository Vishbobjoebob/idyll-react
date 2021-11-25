const admin = require('../config/firebase-config')
const db = admin.firestore();
class Middleware{

    async decodeToken(req,res,next){
        try {
            const token = req.headers.authorization.split(' ')[1];
            console.log(token);
            const decodeValue = await admin.auth().verifyIdToken(token);
            console.log(decodeValue);

            if(decodeValue){
                req.user = decodeValue;
                return next();
            }
            return res.json({message: 'Unauthorized'});
        } catch (e) {
            console.log(e);
            return res.json({message:'Internal Error'})
        }
    }

    // async signUpUser(req, res, next) {
    //     const email = req.user.email;
    //     const username = req.user.username
    //     const firstName = req.user.firstName;
    //     const lastName = req.user.lastName;
    //     const phoneNumber = req.user.phoneNumber;
        
    //     try {
    //         db.collection("users").doc(email).set({
    //             email: email,
    //             username: username,
    //             firstName: firstName,
    //             lastName: lastName,
    //             phoneNumber: phoneNumber,
    //         })
    //     } catch(e) {

    //     }

    // }
}
module.exports = new Middleware();