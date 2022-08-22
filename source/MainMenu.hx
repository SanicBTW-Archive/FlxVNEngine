package;

import flixel.util.FlxColor;
import flixel.addons.transition.FlxTransitionableState;
import flixel.FlxCamera;
import flixel.ui.FlxButton;
import flixel.FlxG;
import flixel.FlxState;

class MainMenu extends FlxState
{
    private var camGame:FlxCamera;
    override public function create()
    {
        camGame = new FlxCamera();

        FlxG.cameras.reset(camGame);
        FlxG.cameras.setDefaultDrawTarget(camGame, true);

        persistentUpdate = persistentDraw = true;

        var setButton = new FlxButton(FlxG.width - 200, 100, "Settings", function(){

        });
        setButton.setGraphicSize(Std.int(setButton.width) * 2);
        setButton.label.setFormat("Arial", 16, FlxColor.BLACK, CENTER);
        setButton.visible = true;
        setButton.scrollFactor.set();
        add(setButton);

        super.create();
    }

    override public function update(elapsed:Float)
    {
        super.update(elapsed);
    }
}