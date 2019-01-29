const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store.js');
const axios = require('axios')

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());
app.post('/createUser', (request, response) => {
    store.createUser({
        username: request.body.username,
        password: request.body.password,
        email: request.body.email
    })
    .then(function() {
        return response.sendStatus(200)
    })
})

app.post('/login', (req, res) => {
    console.log('made a post request')
    store.authenticate({
        username: req.body.username,
        password: req.body.password
    })
    .then( ({success}) => {
        if (success) res.sendStatus(200)
        else res.sendStatus(401)
    })
})


app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})

