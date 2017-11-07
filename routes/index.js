const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', (req, res) => {
//     res.sendFile('/Users/ElizabethF/Desktop/twitter-js/public/stylesheets/style.css');
// })

router.use(express.static('public'))

module.exports = router;
