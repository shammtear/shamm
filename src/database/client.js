const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {}, (e) => {
    if(e) throw e;
    console.log("Conexão realizada com sucesso")
})

module.exports = {
    User: mongoose.model('user', require('./models/User'))
}