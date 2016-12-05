var shantae;
// var platform1;
 var quicksand;
 var quicksandSink;
// var ground;
var GRAVITY = 1;
var JUMP = 10;
var SCENE_W = 2000;
var SCENE_H = 600;
var bg;
var music;
// var frameCount = 0;

function preload(){
  //This is the music I chose to use for my "game".
  music = loadSound('music/scuttletown.mp3')
}

function setup() {
 createCanvas(2000, 600);
 frameRate(60);
 bg = loadImage("resources/background_sample.png")
 // I had to set the volume very low, since it will otherwise blow the ears out of everyone in the room.
 music.setVolume(0.05);
 music.loop();
 // Establishing a variable called "myAnimation" that holds all the animation in set-up. Use var shantae to create a sprite at pos X, pos Y.
  shantae = createSprite(25, 534);
  ground = createSprite(56, 560);
  ground.addImage(loadImage("resources/ground_sample.png"));
  quicksand = createSprite(142,560);
  quicksandSink = createSprite(142,560);

  var myAnimation = shantae.addAnimation("idle", "idle/r_shantae_idle_1.png", "idle/r_shantae_idle_2.png", "idle/r_shantae_idle_3.png", "idle/r_shantae_idle_4.png", "idle/r_shantae_idle_5.png", "idle/r_shantae_idle_6.png", "idle/r_shantae_idle_7.png", "idle/r_shantae_idle_8.png", "idle/r_shantae_idle_9_0.png", "idle/r_shantae_idle_9_1.png", "idle/r_shantae_idle_9_2.png", "idle/r_shantae_idle_9_3.png");
 shantae.addAnimation("walk", "walk/r_shantae_walk_1.png", "walk/r_shantae_walk_2.png", "walk/r_shantae_walk_3.png", "walk/r_shantae_walk_4.png", "walk/r_shantae_walk_5.png", "walk/r_shantae_walk_6.png", "walk/r_shantae_walk_7.png", "walk/r_shantae_walk_8.png", "walk/r_shantae_walk_9_0.png", "walk/r_shantae_walk_9_1.png");
 shantae.addAnimation("crouch", "crouch/r_shantae_prone_1.png", "crouch/r_shantae_prone_2.png", "crouch/r_shantae_prone_3.png", "crouch/r_shantae_prone_4.png", "crouch/r_shantae_prone_5.png", "crouch/r_shantae_prone_6.png", "crouch/r_shantae_prone_7.png", "crouch/r_shantae_prone_8.png");
 shantae.addAnimation("jump", "jump/shantae_jump_1.png", "jump/shantae_jump_2.png", "jump/shantae_jump_3.png");
 shantae.addAnimation("fall", "jump/shantae_jump_4.png", "jump/shantae_jump_5.png", "jump/shantae_jump_6.png", "jump/shantae_jump_7.png");
// shantae.addAnimation("land", "jump/shantae_land_1.png", "jump/shantae_land_2.png", "jump/shantae_land_3.png", "jump/shantae_land_4.png");
 shantae.addAnimation("quicksandjump", "jump/shantae_jump_1.png", "jump/shantae_land_1.png", "jump/shantae_land_2.png", "jump/shantae_land_3.png", "jump/shantae_land_4.png");
 quicksandSink.addAnimation("quicksandsink", "resources/quicksandSink.png");
 quicksandSink.setCollider("rectangle", 0, 0, 64, 79);
 quicksand.addAnimation("quicksand", "resources/quicksand_1.png", "resources/quicksand_2.png", "resources/quicksand_3.png", "resources/quicksand_4.png");
}

function draw() {
  fill(0);
  textAlign(CENTER);
  text("Shantae (C) Wayforward, all sprites are from Spriter's Resource. Music from YouTube.", width/2, 20);
  background(bg);
  drawSprites();

  camera.position.x = shantae.position.x
  camera.position.y = shantae.position.y

  if(camera.position.x <= 1000){
    camera.position.x = 1000;
  } if(camera.position.x >= SCENE_W-1000){
      camera.position.x = SCENE_W-1000;
    }

  if(shantae.position.x < 15){
    shantae.position.x = 15;
  } if (shantae.position.y < 15){
    shantae.position.y = 15;
  } if (shantae.position.x > SCENE_W-15){
    shantae.position.x = SCENE_W-15;
  } if (shantae.position.y > SCENE_H-15){
    shantae.position.y = SCENE_H-15;
  }

  if(shantae.velocity.y >= 2){
    shantae.changeAnimation("fall")
  }
  if(ground.overlapPixel(shantae.position.x, shantae.position.y+25)== false){
    shantae.velocity.y += GRAVITY;
  }
  while(ground.overlapPixel(shantae.position.x, shantae.position.y+17)){
    shantae.position.y--;
    shantae.velocity.y = 0;
  }
  if(shantae.collide(quicksandSink)){
    quicksandSink.velocity.y++;
    if(keyWentDown(UP_ARROW)){
      shantae.changeAnimation("quicksandjump");
      shantae.mirrorX(random(-1, 1));
      shantae.velocity.y = -JUMP/10;
    } else if(keyIsDown(LEFT_ARROW)){
      shantae.changeAnimation("walk");
      shantae.mirrorX(-1);
      shantae.velocity.x = -2/5
    } else if(keyIsDown(RIGHT_ARROW)){
      shantae.changeAnimation("walk");
      shantae.mirrorX(-1);
      shantae.velocity.x = 2/5
    } else{
      shantae.changeAnimation("idle");
      shantae.mirrorX(random(-1, 1));
      shantae.velocity.x = 0;
    }
/*  }else if(shantae.collide(quicksandSink) = false && quicksand.position.y > 560){
    quicksandSink.velocity.y--; */
  }
  if(keyWentDown(UP_ARROW)){
    shantae.changeAnimation("jump");
    shantae.mirrorX(random(-1, 1));
    shantae.velocity.y = -JUMP;
    }
  else if(keyIsDown(RIGHT_ARROW)){
    shantae.changeAnimation("walk");
    shantae.mirrorX(1);
    shantae.velocity.x = 2;
  }
  else if(keyIsDown(LEFT_ARROW)){
    shantae.changeAnimation("walk");
    shantae.mirrorX(-1);
    shantae.velocity.x = -2;
  }
  else if (keyIsDown(DOWN_ARROW)){
    shantae.changeAnimation("crouch");
    shantae.mirrorX(random(-1, 1));
    shantae.velocity.x = 0;
  }
  else{
    shantae.changeAnimation("idle");
    shantae.mirrorX(random(-1, 1));
    shantae.velocity.x = 0;
  }
  camera.on();
  shantae.debug = mouseIsPressed;
  quicksand.debug = mouseIsPressed;
}
