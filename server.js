const express = require('express')
const bodyParser = require('body-parser')
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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
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
        connection.query(`select * from user where tel='${tel}'`, function (err, rows, fields) {
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
app.post('/login',(req,res)=>{
    var tel = req.body.tel
    var pwd = req.body.pwd
    connection.query(`select * from user where tel='${tel}' and password='${pwd}'`, function (err, rows, fields) {
        if (err) throw err
        res.send(rows)
    })
})
app.put('/update',(req,res)=>{
    var tel = req.body.tel
    var pwd = req.body.pwd
    connection.query(`update user set password='${pwd}' where tel = '${tel}'`, function (err, rows, fields) {
        if (err) throw err
        res.send('密码修改成功！')
    })
})
app.put('/msg/:obj',(req,res)=>{
    var obj = JSON.parse(req.params.obj)
    connection.query(`insert into user (username,tel,password) values ('${obj.username}','${obj.tel}','${obj.password}')`, function (err, rows, fields) {
        if (err) throw err
        res.end("注册成功！");
    })
})
app.get('/classify',(req,res)=>{
    connection.query(`select * from classify`, function (err, rows, fields) {
        if (err) throw err
        res.send(rows)
    })
})

app.listen(port, () => console.log(`Example app listening on port port!`))