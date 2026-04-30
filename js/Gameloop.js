var canvas;
var context;
var player;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

<<<<<<< HEAD
<<<<<<< HEAD
// player = new GameObject(0,0,100,100, "#00ff00");
player = new GameObject(50, canvas.height/2, 100, 100, "#ffff00");
player.vx = 0;
player.vy = 0;

<<<<<<< HEAD

npc1 = new GameObject(300, canvas.height/2, 100, 100, "#00ff00");
npc2 = new GameObject(600, canvas.height/2, 100, 100, "#0000ff");
npc3 = new GameObject(900, canvas.height/2, 100, 100, "#ff00ff");

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    

    if (d)
    {
        player.x += 4
    }

    if (a)
    {
        player.x -= 4
    }
    
    player.move();
    if (player.x > canvas.width + player.width/2)
    {
        player.x = -player/width/2
    }

    //all the things under would have made it bounce off walls

    // if (player.x > canvas.width - player.width/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vx = -0;
    // }
    // if (player.x < 0 + player.width/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vx = 0;
    // }
    // if (player.y > canvas.height + player.hight/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vy = 10;
    // }
    // if (player.y < 0 - player.height/2) 
    // {
    //     //player.x = +player.width/2;  //whats this do? This make sure that all of the player is spawned behind the left side.
    //     player.vy = -10;
    // }
    player.drawCircle();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();
<<<<<<< HEAD
}



//new funciton for the functions we called (doHandleAcceleration)
function doHandleAcceleration ()
{
    if (d) 
        {
            player.vx += player.ax * player.force;
        }
    if (a) 
        {
            player.vx += player.ax * -player.force;
        }

}


//the friction is math out by multiplying the player's current speed to the value of frition (friction needs to be lower than 1 and higher than 0)
function doHandleFriction () 
{

    player.vx *= frictionX;

}

function doHandleGravity () 
{
    player.vy += gravity;
}

function doHandlePosition () 
{
    player.x += player.vx;
    player.y += player.vy;
}


function doCheckBottomBounds ()
{
    if (player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
        player.vy = 0;
        doJump();
    }
} 
function doJump()
{
    if (w)
    {
        player.vy = -20;
    }
    if (release(w))
    {
        player.vy = 20;
    }
}
=======
player.draw();

>>>>>>> parent of 6dfd001 (de etvtsce)
=======
player = new Player();

player.draw();
>>>>>>> parent of 9a17826 (box ITS RED OMg)
=======
}
>>>>>>> parent of 4c23557 (I CAN JUMP)
=======
player = new Player();

player.draw();
>>>>>>> parent of 9a17826 (box ITS RED OMg)
