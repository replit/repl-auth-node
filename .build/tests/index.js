const express = require("express");
const { getUserInfo } = require("../lib/index.js");
const app = express();
app.use(express.static("public"));
app.get("/", async function(req, res) {
  const userInfo = getUserInfo(req);
  console.log(userInfo);
  if (userInfo) {
    const userInfoKeys = Object.keys(userInfo);
    if (!userInfo || userInfoKeys.length < 4) {
      throw new Error("User info doesn't have all information");
    }
    for (let userInfoKey of userInfoKeys) {
      if (!userInfo[userInfoKey]) {
        throw new Error(userInfoKey + " is empty");
      }
    }
    req.headers = {};
    if (getUserInfo(req)) {
      throw new Error("User info should be empty");
    }
    res.send("server tests passed, " + userInfo.name);
  } else {
    res.sendFile(__dirname + "/public/login.html");
  }
});
app.get("/home", function(req, res) {
  res.send(`<h1>Hello, ${req.query.user}</h1>`);
});
app.listen(8080, function() {
  console.log("Server up!");
});
//# sourceMappingURL=index.js.map
