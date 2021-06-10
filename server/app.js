require('dotenv').config();
const Express = require('express');
const app = Express();
app.use(Express.json());

const dbConnection = require('./db');
// const middleware =require('./middleware');
// const controllers = require('./controllers');
// app.use(middleware.headers);

app.use('/test', (req, res) => {
    res.send('test message')
});

app.listen(process.env.PORT, () => {
    console.log(`[Server]: App is listening on ${process.env.PORT}`);
})