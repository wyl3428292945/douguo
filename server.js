const express = require('express')
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'douguo'
})
connection.connect()
const app = express()
const port = 3000
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});
app.get('/tel',(req,res)=>{
    var tel = req.query.tel
    if(tel){
        connection.query('select * from user where tel='+tel, function (err, rows, fields) {
            if (err) throw err
            res.send(rows)
        })
    }else{
        res.send("")
    }
})
app.get('/user',(req,res)=>{
    var user = req.query.user
    if(user){
        connection.query(`select * from user where username='${user}'`, function (err, rows, fields) {
            if (err) throw err
            res.send(rows)
        })
    }else{
        res.send("")
    }
})
app.listen(port, () => console.log(`Example app listening on port port!`))