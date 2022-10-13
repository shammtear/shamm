require('./database/client')
require('./loaders/ModelLoader').run()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'));
app.set('views', "./src/views")
app.set('view engine', 'pug')

app.route('/api/v2/auth', require('./routers/auth'))

app.get('/', (req, res) => {
    res.render('./pug/index', { date: new Date().toLocaleTimeString() })
})

app.listen(process.env.PORT, () => {
    console.log('Online')
})