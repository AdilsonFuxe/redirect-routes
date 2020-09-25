const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/uploads', (request, response) =>{
    return response.json({ message: 'Hello World'});
});

router.all('*', (request, response) =>{
    return response.sendFile(`${path.resolve(__dirname, 'views')}/index.html`);
});

module.exports = router;