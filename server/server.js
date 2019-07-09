require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.get('/api/menshirts', controller.getMenShirts);
app.get('/api/menpants', controller.getMenPants);
app.get('/api/menaccessories', controller.getMenAccessories);
app.get('/api/womenshirts', controller.getWomenShirts);
app.get('/api/womenpants', controller.getWomenPants);
app.get('/api/womenaccessories', controller.getWomenAccessories);

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log('running on port: ' + SERVER_PORT)
    })
})