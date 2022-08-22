package;

import openfl.Lib;
import flixel.FlxG;

class SaveData
{
    public static function initSave()
    {
        trace("Save started");
        if(FlxG.save.data.showFPS == null){ FlxG.save.data.showFPS = true; }
        if(FlxG.save.data.antialiasing == null){ FlxG.save.data.antialiasing = true; }
    }
}