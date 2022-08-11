import express from 'express'
import { getUserInfo } from '../lib/index.js'

const app = express();
app.use(express.static('public'));

app.get('/', async function(req, res) {
  const userInfo = getUserInfo(req)
  console.log(userInfo)
  if (userInfo) { // Check to see if the user is logged in.
    //TEST: ensure all userInfo exists
    const userInfoKeys = Object.keys(userInfo)
    if (!userInfo || userInfoKeys.length < 4) {
      throw new Error("User info doesn't have all information")
    }
    for (let userInfoKey of userInfoKeys) {
      if (!userInfo[userInfoKey]) {
        throw new Error(userInfoKey + " is empty")
      }
    }

    //TEST: if req headers are undefined, expect null
    req.headers = {}
    if (getUserInfo(req)) {
      throw new Error("User info should be empty")
    }
    res.send("server tests passed, " + userInfo.name)
  } else {
    res.sendFile(__dirname + '/public/login.html'); // Send a login page if they are not.
  }
});

app.get('/home', function(req, res) {
  res.send(`<h1>Hello, ${req.query.user}</h1>`);
});

app.listen(8080, function() { // Start the server
  console.log('Server up!');
});