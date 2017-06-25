const express = require('express');
const app = express();

const path = require('path');


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.set('port', process.env.PORT || 4200);

var server = app.listen(app.get('port'), function() {
  console.log('Angular server listening on port ' + server.address().port);
});