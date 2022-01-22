const express = require('express');
var connection = require('./routes/db_connector/mongo_connect.js');
var route_signup = require('./routes/signupApi.js');
var route_login = require('./routes/loginApi.js');
var route_savenote = require('./routes/savenoteApi');
var route_getallnotes = require('./routes/getallnotesApi');
var route_updatenote = require('./routes/updatenoteApi');
var route_deletenote = require('./routes/deletenoteApi');

const app = express();
const port = 3000;

connection();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/signup', route_signup);
app.use('/login', route_login);
app.use('/savenote', route_savenote);
app.use('/getallnotes', route_getallnotes);
app.use('/updatenote', route_updatenote);
app.use('/deletenote', route_deletenote);

app.get('/', (req, res) => {
    res.render('index.html');
});



app.listen(port, () => console.log(`day scheduler app listening on port ${port}!`));