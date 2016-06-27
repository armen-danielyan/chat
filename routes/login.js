var express = require('express');
var router = express.Router();

var irc = require('irc');


// Send current time to all connected clients
function sendTime() {
    io.emit('time', { time: new Date().toJSON() });
}

router.get('/', function (req, res, next) {
    res.render('login', {title: 'Welcome to login page'});
});

router.post('/', function (req, res, next) {
    var nickName = req.body.nickname;
    var serverName = req.body.servername;
    var channelName = req.body.channelname;

    console.log(nickName, serverName, channelName);

    res.render('login', {title: 'Login'});

    var client = new irc.Client(serverName, nickName, {
        channels: [channelName]
    });



});

module.exports = router;
