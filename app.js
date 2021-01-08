const express = require('express')
const app = express()
const mysql = require('mysql')
const port = 3000


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'douguo'
})

connection.connect()
    // 菜谱精选页内容接口
app.get('/choiceness', (req, res) => {
        var page = req.query.page
        connection.query(`SELECT * from jingxuan limit ${(page-1)*24},24`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱最新页内容接口
app.get('/recent', (req, res) => {
        var page = req.query.page
        connection.query(`SELECT * from zuixin limit ${(page-1)*24},24`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱精选页数接口
app.get('/getpagea', (req, res) => {
        connection.query(`SELECT * from jingxuan`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱最新页数接口
app.get('/getpageb', (req, res) => {
        connection.query(`SELECT * from zuixin`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱分类接口
app.get('/classify', (req, res) => {
        connection.query(`select * from classify`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱菜单接口 默认最热
app.get('/hot', (req, res) => {
        var page = req.query.page
        connection.query(`SELECT * from caidan limit ${(page-1)*12},12`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱菜单 最热页数接口
app.get('/getpagec', (req, res) => {
        connection.query(`SELECT * from caidan`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱菜单接口 最新
app.get('/new', (req, res) => {
        var page = req.query.page
        connection.query(`SELECT * from caidan_zuixin limit ${(page-1)*12},12`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // 菜谱菜单 最新页数接口
app.get('/getpaged', (req, res) => {
    connection.query(`SELECT * from caidan_zuixin`, function(err, rows, fields) {
        res.send(rows)
    })
})

app.get('/food', (req, res) => {
        connection.query(`SELECT * from shicai`, function(err, rows, fields) {
            res.send(rows)
        })
    })
    // connection.end()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))