// var x = 50
// var y = 150
var gameReview

function preload(){
  gameReview = loadJSON("giantbomb.json")
}

function setup(){
  noCanvas();
  var review = getReview(gameReview);
  createP("This game has been reviewed" + review + "/5 Stars.");
}

function getReview(results){
  var results = data.results;
  var item = results[1];
  var game = item.game;
  var score = game.score;
  return score;
}

// Originated from: http://www.giantbomb.com/api/reviews/?api_key=6b6f1eef5d5ddc08447936197965d53e210c2074&format=json&limit=10&field_list=game,score,site_detail_url
