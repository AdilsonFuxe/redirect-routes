const express = require('express');
const path = require('path');
const router = require('./routes');
class App {
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
       
    }


    routes(){
        this.express.use(
            '/uploads', 
            express.static(path.resolve(__dirname, '..', 'uploads'))
            );
        this.express.use(router);
    }
}


module.exports = new App().express;