var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var PORT = 3000;
var friends = require('../data/friends.js');
var htmlRoutes = require("./htmlRoutes.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(htmlRoutes);
// console.log("friends" +friends);
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
	//console.log("body:" +req.body);
	debugger;
	//console.log(JSON.stringify(req));
	var userData = JSON.parse(req.body.userData);
	//var userData = req.body;
	console.log("name:" +userData.name);
	console.log("user score:" +userData.scores);
	// console.log("req inside api"+JSON.stringify(req));
	// console.log("friends name: " +friends[0].name);

	var userScores = userData.scores;

	var matchName = '';
	var matchImage = '';
	var maxDiff = 10000;

	for (var i = 0; i < friends.length; i++) {
		var scoreDiff = 0;
		for (var j = 0; j < userScores.length; j++) {
			//console.log(friends[i].scores[j]);
			
			scoreDiff += Math.abs(friends[i].scores[j] - userScores[j]); 

		}
		console.log("score diff:"+scoreDiff);
		if(maxDiff > scoreDiff){

			maxDiff = scoreDiff;
			matchName = friends[i].name;
			matchImage = friends[i].data;


		}
	}
	console.log("match image:" +matchImage);
	console.log("match name:"+matchName);
	friends.push(userData);
	// fs.appendFile('../data/friends.js',",\r\n\r\n", 'utf-8', function(err) {
	// 		if (err) throw err
	// })
	// fs.appendFile('../data/friends.js', JSON.stringify(userData), 'utf-8', function(err) {
	// 		if (err) throw err
	// 		console.log('Done!')
	// })
	res.json({'status': 'ok', 'matchName': matchName, 'matchImage': matchImage});	
});
app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
});