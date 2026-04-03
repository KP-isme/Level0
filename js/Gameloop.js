var canvas;
var context;
var player;
var timer;
var interval = 1000/60; //this means the animation is going to play in 60 milliseconds


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new Player();
player.vx = 0;
player.vy = 10;

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    if (player.x > canvas.width - player.width/2) 
    {
        //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
        player.vx = -10;
    }
    if (player.x < 0 + player.width/2) 
    {
        //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
        player.vx = 10;
    }
    if (player.y > canvas.height + player.hight/2) 
    {
        //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
        player.vy = 10;
    }
    if (player.y < 0 - player.height/2) 
    {
        //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
        player.vy = -10;
    }
    player.draw();
}