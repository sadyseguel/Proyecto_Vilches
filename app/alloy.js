// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
// Loads the map module, which can be referenced by Alloy.Globals.Map
Alloy.Globals.Map = (OS_IOS || OS_ANDROID ) ? require('ti.map') : Ti.Map;
Alloy.Globals.Map = require('ti.map');
// Loads the Facebook module, which can be referenced by Alloy.Globals.Facebook
Alloy.Globals.Facebook = require('facebook');
Alloy.Globals.Facebook.appid = '487368371402986';
Alloy.Globals.Facebook.permissions = ['publish_stream', 'read_stream','user_photos', 'friends_photos', ' user_events', 'friends_events'];
//Alloy.Globals.User = {};
