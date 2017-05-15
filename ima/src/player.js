var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'http://an.facebook.com/v1/instream/vast.xml?placementid=TEST_PLACEMENT_ID&pageurl=test.com'
};

// This must be called before player.play() below.
player.ima(options);
player.ima.requestAds();
// On mobile devices, you must call initializeAdDisplayContainer as the result
// of a user action (e.g. button click). If you do not make this call, the SDK
// will make it for you, but not as the result of a user action. For more info
// see our examples, all of which are set up to work on mobile devices.
// player.ima.initializeAdDisplayContainer();

// This must be called after player.ima(...) above.
player.play();