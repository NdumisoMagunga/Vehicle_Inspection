module.exports = {
    database: process.env.DATABASE,
    port: process.env.PORT,
    secretKey: process.env.COOKIE_KEY,
    google: {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK,
		profileFields:['id', 'name', 'displayName', 'picture', 'email', 'gender']
    }

}
