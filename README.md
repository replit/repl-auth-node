# Repl Authentication
Repl Authentication is a simple way to allow users to log in, and access their information.

## Get started
Ensure that a user is logged in with replit following [our docs](https://docs.replit.com/hosting/authenticating-users-repl-auth)
```js
const express = require('express'); 
const { getUserInfo } = require('../index.js')

const app = express();
app.use(express.static('public'));

app.get('/', async function(req, res) {
  const userInfo = getUserInfo(req)
  console.log(userInfo)
}
```

## Docs

> `getUserInfo(Request req)`

Gets all user info. Returns UserInfo object.
```js
const userInfo = getUserInfo(req)
```

UserInfo object:
```
UserInfo {
  id?: string;
  name?: string;
  bio?: string;
  url?: string;
  profileImage?: string;
  roles?: Array<string>
  teams?: Array<string>
}
```


## Tests
```sh
npm run test
```
Then login and assure that it says "server tests passed"
