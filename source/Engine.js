//based of my canvas shit game code
class Game
{
    Canvas = document.createElement('canvas');
    Context = this.Canvas.getContext('2d');

    constructor(Width = 1280, Height = 720)
    {
        this.Width = Width;
        this.Height = Height;
    }

    start()
    {
        this.Canvas.width = this.Width;
        this.Canvas.height = this.Height;
        this.Canvas.style.backgroundColor = 'white';

        document.getElementById('mainDiv').appendChild(this.Canvas);

        this.Canvas.addEventListener('mouseenter', (e) => {
            e.preventDefault();
        });

        this.Canvas.addEventListener('mouseleave', (e) => {
            e.preventDefault();
        });

        this.Canvas.addEventListener('mousemove', (mouse) => {
            onMouseMove(mouse.offsetX, mouse.offsetY);
        });

        this.Canvas.addEventListener('mousedown', (e) => {
            e.preventDefault();

            onMouseDown();
        });

        this.Canvas.addEventListener('mouseup', (e) => {
            e.preventDefault();

            onMouseUp();
        });

        this.interval = setInterval(update, 20);
    }

    clear() 
    {
        this.Context.clearRect(0, 0, this.Width, this.Height);
    }
}

class Cursor
{
    constructor(cX = 0, cY = 0, cWidth = 10, cHeight = 10, cColor = "blue")
    {
        this.cX = cX;
        this.cY = cY;
        this.cWidth = cWidth;
        this.cHeight = cHeight;
        this.cColor = cColor;
    }

    render()
    {
        game.Context.fillStyle = this.cColor;
        game.Context.fillRect(this.cX, this.cY, this.cWidth, this.cHeight);
    }
}

function update()
{
    game.clear();
    cum.render();
}

function onMouseDown()
{
    cum.cColor = "red";
}

function onMouseUp()
{
    cum.cColor = "blue";
}

function onMouseMove(x, y)
{
    cum.cX = x;
    cum.cY = y;
}

var game = new Game();

var cum = new Cursor();

function startGame()
{
    game.start();
}