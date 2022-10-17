const Linked = require('./Linked.js')
const User = require('./User.js')

module.exports = new (require('mongoose')).Schema({
    User: { type: User },
    Manage_Users: { type: Boolean, default: false },
    Eval_Access: { type: Boolean, default: false },
    Can_See_SysLogs: { type: Boolean, default: false },
    LWAUser: { type: Linked },
    AdministratorPerms: { type: Boolean, default: false }
})