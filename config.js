module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI,
    activeIntegrations: {
        twitter: true,
        youtube: true,
        whatsapp: true,
        spotify: true
    },

}