var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index')
})

router.get('/logout', function (req, res, next) {
  res.redirect('/')
})

router.get('/home', function (req, res, next) {
  res.render('pages/menuadmin')
})

router.post('/login', function (req, res, next) {
  res.redirect('home')
})

router.post('/logout', function (req, res, next) {
  res.redirect('/')
})

router.get('/register', function (req, res, next) {
  res.render('pages/register')
})

router.post('/register', function (req, res, next) {
  res.redirect('/')
})

module.exports = router
