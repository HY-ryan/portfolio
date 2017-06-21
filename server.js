const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

const bCrypt = require('bcrypt-nodejs');

var app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/node_modules'));

// body parser
app.use(bodyParser.urlencoded({extended: true}))


// connect to database. start server if successful.
MongoClient.connect('mongodb://localhost:27017/recipes', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(8000, () => {
        console.log('listening on port 8000')
    })
})


// home route
// ***** SHIT'S BUSTED. WON'T SERVE ANGULAR APP. ********
// use ng serve to launch angular and node server to launch server
// app.all('/', function(req, res){
//	res.sendFile('index.html');
// });

// kitchenpi api route
app.get('/kitchenpiapi', function(req, res) {
db.collection('recipes').find().toArray((err, result) => {
        if (err) return console.log(err)
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(result)
	})
})

app.post('/kitchenpiapi', (req, res) => {
	var recipe = req.body;

	db.collection('recipes').insertOne(recipe, (err, doc) => {
		if (err) {
			console.log(err);
		} else {
			res.status(201).json(doc.ops[0]);
		}
	})	
})

app.get('/blogapi', function(req, res) {
	db.collection('blog').find().toArray((err, result) => {
		if (err) return console.log(err)
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(result)
	})
})

app.post('/blogapi', (req, res) => {
	var entry = req.body;

	db.collection('blog').insertOne(entry, (err, doc) => {
		if (err) {
			console.log(err);
		} else {
			res.status(201).json(doc.ops[0]);
		}
	})	
})

// configure Passport for authentication
const passport = require('passport');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');  
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// bcrypt stuff
var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}

// serialize / deserializing users
passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	db.collection.users.findById(id, function(err, user) {
		done(err, user);
	});
});

// passport login route
passport.use('login', new LocalStrategy({
	passReqToCallback : true
},
function(req, username, password, done) {
	// check mongo if a user with username exists
	db.collection.users.findOne({ 'username' : username }),
		function(err, user) {
			// in the case of an error, return using done method
			if (err)
				return done(err);
			// username does not exist, log error & redirect back
			if (!user) {
				console.log('User not found with this username' + username);
				return done(null, false, 
				req.flash('message', 'User Not Found.'));
			}
			// user exists but wrong password, log the error
			if (!isValidPassword(user, password)) {
				console.log('invalid password');
				return done(null, false,
				req.flash('message', 'invalid password'));
			}
			// user and password both match, return user from 
			// done method which will be treated like success
			return done(null, user);
		}
}));

passport.use('signup', new LocalStrategy({
	passReqToCallback : true
},
function(req, username, password, done) {
	findOrCreateUser = function() {
		// find a mongo user with the provided username
		db.collection.users.findOne({ 'username': username}, function(err, user) {
			// in case of any error return
			if(err) {
				console.log('error in signup: ' + err);
				return done(err);
			}
			// already exists
			if(user) {
				console.log('user already exists');
				return done(null, false,
					req.flash('message','user already exists'));
			} else {
				// if there is no user with that email
				// create the user
				var user = req.body;
				db.collection.users.insertOne(user, (err, doc) => {
					if (err) {
						console.log(err);
					} else {
						res.status(201).json(doc.ops[0]);
					};
				});
			};
		});
		// Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
	};
}));

// handle login POST
app.post('/login', passport.authenticate('login'));


//custom 404 page
app.use(function(req, res, next) {
	res.status(404).redirect('404.html');
});

// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});
