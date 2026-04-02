function Player()
{
    // setting up player's starting point

    this.x = canvas.width/2;
    this.y = canvas.height/2;

    //player size
    this.width = 100;
    this.height = 100;

    //this is the color for player
    this.color = "#ff3232ff";
    
    this.draw = function()
    {
        context.save();
            context.fillstyle = this.color;
            context.translate (this.x,this.y);
            context.fillRect ((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();

    }







}