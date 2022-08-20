const express = require('express');
const app = express();

const port = 3000;
app.use('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);