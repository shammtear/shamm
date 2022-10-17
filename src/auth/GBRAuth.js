const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

module.exports = class GBRAuth {
    static generate(id, username) {
        return jwt.sign({
                id,
                username
            },
            secret,
            {expiresIn: '3d'})
    }

    static isValid(token) {
        jwt.verify(token,
            secret,
            (err, decoded) => {
                return !err;
            })
    }
}