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
}
module.exports = new Middleware();