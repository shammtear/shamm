const router = require('express').Router()
const GBRAuth = require('../auth/GBRAuth');

router.post('/login', (req, res) => {
    if(!req.body) res.status(400).send({ message: "You need send a request body" })
    if(!req.body.username) res.status(400).send({ message: "You need send 'username' in request body" })
    if(!req.body.password) res.status(400).send({ message: "You need send 'password' in request body" })
})

