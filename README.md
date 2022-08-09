# Repl Authentication
Repl Authentication is a simple way to allow users to log in, and access their information.

## Get started
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

Gets all user info. Returns object.
```js
const userInfo = getUserInfo(req)
```

## Tests
```sh
npm run test
```
Then login and assure that it says "server tests passed"
