// require('dotenv').config();
const Express = require('express');
const { DataTypes } = require('sequelize/types');
const app = Express();
app.use(Express.json());
 app.use('/list', controllers.listController);
 app.use('/user', controllers.userController)
const dbConnection = require('./db');
// const middleware =require('./middleware');
 const controllers = require('./controllers');
// app.use(middleware.headers);


const List = db.define('list', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.INTEGER,   
        allowNull:false
    },
    timedue: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,

    }


})

app.use('/test', (req, res) => {
    res.send('test message')
});

app.listen(process.env.PORT, () => {
    console.log(`[Server]: App is listening on ${process.env.PORT}`);
})