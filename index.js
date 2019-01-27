const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store.js');

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


app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})

