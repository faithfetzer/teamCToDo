module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //1
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //2
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, accept, Authorization'); //3

    next()
}

// i copied and pasted this because it is my understanding that it is what all thigns need for the end points we are using- we can edit if necessary- FF