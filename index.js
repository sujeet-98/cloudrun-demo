const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('hello test app'));

app.listen(8080, () => {
    console.log('My rest api running on port 8080!');
})

