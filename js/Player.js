function GameObject(x,y,w,h,color)
{
    // setting up player's starting point


   // sets up the player's starting point
    // setting up x
    if (x==undefined)
    {
        this.x = canvas.width/2;
    }
    else 
    {
        this.x = x;
    }
    //Setting up y 
    if (y==undefined)
    {
        this.y = canvas.height/2;
    }
    else
    {
        this.y = w;
    }
    //this is for w
    if (w==undefined)
    {
        this.width = 100;
    }
    else
    {
        this.width = w;
    }
    //Setting up the height
    if (h==undefined)
    {
        this.height = 100;
    }
    else 
    {
        this.height = h
    }
    if(color==undefined)
    {
        this.color = "#ff0000"
    }
    else
    {
        this.color = color;
    }
<<<<<<< HEAD

<<<<<<< HEAD



    // SETTING UP THE BOUNDING BOX (HIT BOXES REEEEEEEEE)
    this.left = function()
    {
        return this.x - this.width/2
    }
    this.right = function()
    {
        return this.x +this.width/2
    }
    this.top = function()
    {
        return this.y - this.height/2
    }
    this.bottom = function()
    {
        return this.y + this.height/2
    }




    this.preX = this.x;


    //setting up physics

    this.force = 1;
    this.ax = 1;    //horizontal accelaration
    this.ay = 1;    //vertical accelaration

    // the player's velocity
=======
>>>>>>> parent of 4c23557 (I CAN JUMP)
    this.vx = 0;
    this.vy = 0;

    this.drawRect = function()
=======
    //this is the color for player
    this.color = "#ff0000";
    
    this.draw = function()
>>>>>>> parent of 9a17826 (box ITS RED OMg)
    {
        context.save();
            context.fillstyle = this.color;
            context.translate (this.x,this.y);
            context.fillRect ((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();

    }

    this.drawCircle = function()
    {
        context.save();
            context.beginPath();
            context.fillStyle = this.color;                      
            context.translate(this.x, this.y);
            context.arc(0,0, this.width/2, 0, 360 * Math.PI/180, true);  //circle are done in radians instead of degrees (this is how you change it to a full circle)
            context.closePath();
            context.fill();
        context.restore();
    }






}