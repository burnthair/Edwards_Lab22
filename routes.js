var express = require('express');
var router = express.Router();
var quotes = {
  "quotesArr": [
  'I have been performing feats of strength all morning. – Frank Costanza',
  'Just remember, when you control the mail, you control... information. – Newman',
  'Boy, these pretzels are makin\' me thirsty. – Kramer',
  'I\'m speechless. I have no speech. – George Costanza'
]};

router.get('/test', function (req, res) {
  res.json(quotes);
});

module.exports = router;
