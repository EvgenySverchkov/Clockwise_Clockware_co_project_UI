const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});


app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);