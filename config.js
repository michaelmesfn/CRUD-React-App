const admin = require("firebase-admin");

const serviceAccount = require("./database-service-account-keys.js");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fullstack.firebaseio.com",
    databaseAuthVariableOverride: {
        uid: "tb-service"
    }
});

module.exports = {
    database: admin.firestore()
}