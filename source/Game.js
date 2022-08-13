var game = new Game();
game.onUpdate = function(){
    game.clear();

    //maybe its a bad way to do?
    for(var i in game.renderObjects)
    {
        game.renderObjects[i].render();
    }
}

game.onMouseDown = function(){
    cum.Color = cum.clickColor;

    mouseState.Text = "Mouse Down: true";
}

game.onMouseUp = function(){
    cum.Color = cum.idleColor;

    mouseState.Text = "Mouse Down: false";
}

game.onMouseMove = function(x, y){
    cum.X = x;
    cum.Y = y;

    mousePos.Text = "Mouse Pos: " + x + ", " + y;
}

var cum = new Cursor(game);
cum.clickColor = "blue";
cum.idleColor = "dodgerblue";

var mouseState = new TextInstance(game, 40, 50, "25px");
mouseState.Text = "Mouse Down: false";

var mousePos = new TextInstance(game, 40, 80, "25px");
mousePos.Text = "Mouse Pos: 0, 0";

game.renderObjects.push(mouseState, mousePos, cum);

function startGame()
{
    game.start();
}