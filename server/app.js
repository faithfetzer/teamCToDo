require('dotenv').config();
const Express = require('express');
const app = Express();

const dbConnection = require('./db');

app.use(Express.json());

const controllers = require('./controllers');

app.use('/test', (req, res) => {
    res.send('test message')
});

app.use(require('./middleware/headers'));
app.use('/user', controllers.userController)

app.use(require('./middleware/validateSession'));

app.use('/list', controllers.listController);



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