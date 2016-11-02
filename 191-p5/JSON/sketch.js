// www.giantbomb.com/api/game/3030-49139/?api_key=6b6f1eef5d5ddc08447936197965d53e210c2074&format=json&field_list=genres,name
// www.giantbomb.com/api/reviews/?api_key=6b6f1eef5d5ddc08447936197965d53e210c2074&format=json&limit=10&field_list=game,score,site_detail_url
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
  var name = game.main.name;
  console.log(name);
  var score = game.main.score;
  console.log(score);

  background(0);
  fill(0, 255, 0, 50);
  for(var i = 0; i < 10, i++){
    ellipse(i*x+50, y, 50, 50);
  }
}
