var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/public/';

router.use(function(req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res) {
  res.sendFile(path + 'index.html');
});

router.get('/test', function(req,res) {
  res.sendFile(path + 'test.html');
});

app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});

module.exports = router;
