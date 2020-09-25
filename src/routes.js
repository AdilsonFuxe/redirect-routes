const express = require('express');

const router = express.Router();

router.get('/uploads', (request, response) =>{
    return response.json({ message: 'Hello World'});
});

module.exports = router;