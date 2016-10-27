# Koa2 server boilerplate
Node.js server using koa2

### Run
```
npm install
npm start
// npm run dev (running server with hot reload)
```

### Use
Get requests: `api/load` - loading stored data on server

Post requests: `api/save` - saving data on server

Other queries will render static html

### Store data on server
For permanent store data on server without any db, use `node-persist`

### Test in browser
You can use fetch for testing

### Request tests
You can use for example `fetch` in Chrome for test requests
#####Post request for saving data

```js
const payload = {
    name: 'Aliaksandr',
    surname: 'Yankouski'
};

fetch('/api/save', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
  .then(res => res.json())
  .then(data => console.log(data));
```

#####Get request for loading data

```js
const payload = {
    name: 'Aliaksandr',
    surname: 'Yankouski'
};

const url = new URL('http://localhost:3000/api/load');

Object.keys(payload).forEach(key => { url.searchParams.append(key, payload[key]) })
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```
