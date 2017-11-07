const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.use(express.static('public'))

router.get('/users/:name', (req, res) => {
    // let person = req.params.name;
    // let profile = tweetBank.find(function(tweet) {
    //     return person === tweet.name.split(' ')[0];
    // });
    // let tweetsArr = profile.map(function(obj) {
    //     return obj.content
    // })
    // let userName = profile[0].name;

    // res.send(userName + '-' + tweetsArr);

    let person = req.params.name.split('-').join(' ');
    let tweets = tweetBank.find(function(tweet) {
        return person === tweet.name;
    });
    res.render( 'index', { tweets: tweets, showForm: true } );    
})

// router.get('/users/:name', (req, res) => {
//     let profile = tweetBank.find('name', name);
//     let tweets = profile[0].content;
//     res.send(tweets);
// })

module.exports = router;
