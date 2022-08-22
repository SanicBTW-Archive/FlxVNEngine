package;

import openfl.media.Sound;
import flixel.FlxG;
import haxe.Json;
#if sys
import sys.io.File;
import sys.FileSystem;
#end
import openfl.utils.Assets;
import lime.system.System;
import haxe.io.Path;

//from my funky fnf storage access
class StorageAccess
{
    public static var checkDirs:Map<String, String> = new Map();
    public static var checkFiles:Map<String, Array<String>> = new Map();

    public static function checkStorage()
    {
        #if sys
        trace("Checking!");
        checkDirs.set("main", Path.join([System.applicationStorageDirectory, "flxvnengine_settings"]));
        trace(checkDirs.get("main"));
        //checkDirs.set("main", Path.join([System., 'sanicbtw_pe_files']));

        /*
        checkDirs.set("data", Path.join([checkDirs.get("main"), "data"]));
        checkDirs.set("songs", Path.join([checkDirs.get("main"), "songs"]));

        for (varName => dirPath in checkDirs) 
        {
            if(!FileSystem.exists(dirPath)){ FileSystem.createDirectory(dirPath); }
        }*/

        openfl.system.System.gc();
        #end
    }
}