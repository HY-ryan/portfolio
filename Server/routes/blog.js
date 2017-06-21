const Post = require('../models/blog');
const express = require('express');
const router = express.Router();
const credentials = require('../credentials');

router.route('/blog').get((req, res) => {
    Post.find((err, posts) => {
        if (err) {
            return res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(posts);
    });
});

router.route('/blog').post((req, res) => {
    var post = new Post(req.body);

    if (req.body.password === credentials.adminPassword) {
        post.save((err) => {
            if (err) {
                return res.send(err);
            }

            res.send({message: 'Post added!'});
        });
    } else {
        res.send({message: 'wrong password'});
    }
});

module.exports = router;