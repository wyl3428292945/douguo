const express = require('express')
var mysql = require('mysql')
const app = express()
const port = 8083
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'douguohealthy'
})

connection.connect()
app.get('/', (req, res) => {
    var lim = req.query.lim
    var page = req.query.page
    connection.query(`select * from content01  limit ${(page-1)*lim},${lim}`, function(err, rows, fields) {
        res.send(rows)
    })
})
app.get('/list', (req, res) => {
    connection.query('select * from content01', function(err, rows, fields) {
        res.send(rows)

    })
})
app.get('/right', (req, res) => {
    connection.query('select * from con', function(err, rows, fields) {
        res.send(rows)
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))