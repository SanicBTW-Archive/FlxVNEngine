//based of my canvas shit game code
class Game
{
    Canvas = document.createElement('canvas');
    Context = this.Canvas.getContext('2d');

    constructor(Parent = null)
    {
        this.Width = (window.innerWidth - 106) + "px";
        this.Height = window.innerHeight;

        this.Canvas.width = this.Width;
        this.Canvas.height = this.Height;
        this.Canvas.style = `transform: translateZ(0px); margin-left: 106px; margin-top: 0px;`;
        this.Canvas.style.backgroundColor = 'white';

        if(Parent != null)
        {
            document.getElementById(Parent).appendChild(this.Canvas);
        }
        else
        {
            document.body.appendChild(this.Canvas);
        }
    }

    start()
    {
        this.Canvas.addEventListener('mouseenter', (e) => {
            e.preventDefault();
        });

        this.Canvas.addEventListener('mouseleave', (e) => {
            e.preventDefault();
        });

        this.Canvas.addEventListener('mousemove', (mouse) => {
            mouse.preventDefault();

            this.X = mouse.offsetX;
            this.Y = mouse.offsetY;
            this.onMouseMove(this.X, this.Y);
        });

        this.Canvas.addEventListener('mousedown', (e) => {
            e.preventDefault();

            this.onMouseDown();
        });

        this.Canvas.addEventListener('mouseup', (e) => {
            e.preventDefault();

            this.onMouseUp();
        });

        //properly add touch support in a future
        this.Canvas.addEventListener('touchmove', (touch) => {
            touch.preventDefault();

            console.log("touch moving");
        });

        this.Canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();

            this.onMouseDown();
        });

        this.Canvas.addEventListener('touchend', (e) => {
            e.preventDefault();

            this.onMouseUp();
        });

        window.addEventListener('resize', (res) => {
            res.preventDefault();

            //this.Canvas.width = (window.innerWidth >= 1280 ? 1280 : window.innerWidth);
            //this.onWindowResize(, window.innerHeight);
        });

        this.interval = setInterval(this.onUpdate, 20);
    }

    clear() 
    {
        this.Context.clearRect(0, 0, this.Width, this.Height);
    }

    onUpdate;
    onMouseDown;
    onMouseUp;
    onMouseMove;
    onWindowResize;
    renderObjects = [];
}

class Cursor
{
    constructor(gameInstance = null, X = 0, Y = 0, Width = 10, Height = 10)
    {
        this.X = X;
        this.Y = Y;
        this.Width = Width;
        this.Height = Height;
        this.game = gameInstance;
    }

    clickColor = "red";
    idleColor = "dodgerblue";
    clickableColor = "green";

    Color = this.idleColor;

    render()
    {
        this.game.Context.fillStyle = this.Color;
        this.game.Context.fillRect(this.X, this.Y, this.Width, this.Height);
    }
}

//might be improved in the future
class TextInstance
{
    constructor(gameInstance = null, X = 0, Y = 0, FontSize = "30px")
    {
        this.X = X;
        this.Y = Y;
        this.FontSize = FontSize;
        this.game = gameInstance;
    }

    Text;
    Font = "Arial";
    fgColor = "black";

    render()
    {
        this.game.Context.font = this.FontSize + " " + this.Font;
        this.game.Context.fillStyle = this.fgColor;
        this.game.Context.fillText(this.Text, this.X, this.Y);
    }
}