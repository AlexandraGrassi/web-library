const express = require('express');
const router = express.Router();
let books = require('../data/books.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', books: books});
});

module.exports = router;
