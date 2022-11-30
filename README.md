# Repl Authentication
Repl Authentication is a simple way to allow users to log in, and access their information.

## Get started
Ensure that a user is logged in with replit following [our docs](https://docs.replit.com/hosting/authenticating-users-repl-auth)
```js
const express = require('express'); 
const { getUserInfo } = require('@replit/repl-auth')

const app = express();
app.use(express.static('public'));

app.get('/', async function(req, res) {
  const userInfo = getUserInfo(req)
  console.log(userInfo)
}
```

## Docs

> `getUserInfo(RequestLike request)`

Gets all user info. Returns a UserInfo object if the user is logged in.
```js
const userInfo = getUserInfo(req)
```

UserInfo type object:
```ts
// You can import it:
import type { UserInfo } from "@replit/repl-auth"

interface UserInfo {
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
Then log in (not on localhost) and assure that it says `server tests passed`
