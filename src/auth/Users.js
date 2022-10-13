module.exports = class Users {
    static check(username, password) {
        User.findById(username, (err, info) => {
            const RP = info.get('password')
            const b64Pass = Buffer.from(password).toString('base64')
            if(err || RP !== b64Pass) return { code: 404 } 
            else return { code: 200 }
        })
    }
}