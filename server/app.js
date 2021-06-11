require('dotenv').config();
const Express = require('express');
const app = Express();

const dbConnection = require('./db');

app.use(Express.json());

const controllers = require('./controllers');
const middleware =require('./middleware');

app.use(middleware.headers);
app.use('/list', controllers.listController);
app.use('/user', controllers.userController)



app.use('/test', (req, res) => {
    res.send('test message')
});

// app.listen(process.env.PORT, () => {
//     console.log(`[Server]: App is listening on ${process.env.PORT}`);
// })

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() =>{
        app.listen(process.env.PORT, ()=>{
            console.log(`[Server]: App is listening on ${process.env.PORT}.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });