const app = require('./app');



app.listen(5001 || process.env.PORT, ()=>{
    console.info('server on...')
});