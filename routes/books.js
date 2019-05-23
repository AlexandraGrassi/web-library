var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/books', function(req, res, next) {
  res.render(Object.values(req.context.booksJson));
});

module.exports = router;
