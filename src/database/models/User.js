module.exports = new (require('mongoose')).Schema({
    id: { type: Number, default: 1 },
    username: { type: String },
    profilePhoto: { type: String },
    password: { type: String },
    userCreatedAt: { type: Date, default: Date.now },
    lastLoginDate: { type: Date },
    isAdministrator: { type: Boolean, default: false }
})