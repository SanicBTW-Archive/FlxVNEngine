package;

import flixel.FlxState;
#if android
import com.player03.android6.Permissions;
#end
import flixel.FlxG;
import flixel.input.keyboard.FlxKey;

class SetupState extends FlxState
{
    public static var muteKeys:Array<FlxKey> = [FlxKey.ZERO];
	public static var volumeDownKeys:Array<FlxKey> = [FlxKey.NUMPADMINUS, FlxKey.MINUS];
	public static var volumeUpKeys:Array<FlxKey> = [FlxKey.NUMPADPLUS, FlxKey.PLUS];

    override public function create()
    {
        FlxG.game.focusLostFramerate = 30;
		FlxG.sound.muteKeys = muteKeys;
		FlxG.sound.volumeDownKeys = volumeDownKeys;
		FlxG.sound.volumeUpKeys = volumeUpKeys;
		#if android
		FlxG.android.preventDefaultKeys = [BACK];
		if(!Permissions.hasPermission(Permissions.READ_EXTERNAL_STORAGE) && !Permissions.hasPermission(Permissions.WRITE_EXTERNAL_STORAGE)){
			Permissions.requestPermissions([Permissions.READ_EXTERNAL_STORAGE, Permissions.WRITE_EXTERNAL_STORAGE]);
		} else {
			StorageAccess.checkStorage();
		}
		#end

        #if windows
		StorageAccess.checkStorage();
		#end
        FlxG.keys.preventDefaultKeys = [TAB];

        FlxG.save.bind("flx_vnengine", "sanicbtw");
        SaveData.initSave();

        FlxG.switchState(new MainMenu());

        super.create();
    }
}