#pragma strict

// Adapted from http://wiki.unity3d.com/index.php/ScreenShotMovie

// Attach this script to the camera you want to record from

// The folder we place all screenshots inside.
// If the folder exists we will append numbers to create an empty folder.
public var folder = 'C:/ScreenshotFolder';

function Start () {
	// If the folder doesn't already exist, create it
    if ( System.IO.Directory.Exists(folder) == false ) {
    	System.IO.Directory.CreateDirectory(folder);
    }
}
 
function Update () {

	// Save screenshot if key pressed
	if ( Input.GetKey (KeyCode.P) ) {

    	// Name the image file
   		var name = String.Format("{0}/{1}.png", folder, System.DateTime.Now.ToString('yyyy-MM-dd_HH-mm-ss'));

    	// Capture the screenshot
    	Application.CaptureScreenshot(name);

    	// Confirm
    	Debug.Log(name+' saved to '+folder);
    }
}