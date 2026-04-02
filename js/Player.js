function Player()
{
    // setting up player's starting point

    this.x = canvas.width/2;
    this.y = canvas.height/2;

    //player size
    this.width = 100;
    this.height = 100;

    //this is the color for player
    this.color = "#c43333ff";

    this.draw = function()
    {
        useContext.fillstyle = this.color;
        useContext.translate (this.x,this.y);
        context.fillRect ((-this.width), (-this.width), this.width, this.height);
        context.restore();

    }






}