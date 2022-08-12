var game = new Game();
game.onUpdate = function(){
    game.clear();
    cum.render();
}

game.onMouseDown = function(){
    cum.Color = cum.clickColor;
}

game.onMouseUp = function(){
    cum.Color = cum.idleColor;
}

game.onMouseMove = function(x, y){
    cum.X = x;
    cum.Y = y;
}

var cum = new Cursor(game, 0, 0, 15, 20);
cum.clickColor = "blue";
cum.idleColor = "dodgerblue";

function startGame()
{
    game.start();
}