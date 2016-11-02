var x = 50
var y = 150

function setup(){
  var url = "http://www.giantbomb.com/api/reviews/?api_key=6b6f1eef5d5ddc08447936197965d53e210c2074&format=json&limit=10&field_list=game,score,site_detail_url"
  loadJSON(url, gameReview);
  createCanvas(750, 250);
  noLoop();
  noStroke();
}

function draw(){
}

function gameReview(game){
  console.log(game);
  var name = game.main.name; //Attempt at getting the name of the game at review.
  console.log(name); //And placing it in the Console Log.
  var score = game.main.score; //Doing the same thing, except for the score itself.
  console.log(score);

  background(0);
  fill(0, 255, 0, 50);
  for(var i = 0; i < 10; i++){
    ellipse(i*x+50, y, 50/score, 50/score);
  }
}
