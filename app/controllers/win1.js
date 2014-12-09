function testclick(e){
	alert('Clicked ' + '\'' + e.source.id + '\'');
}

// botom me gusta
function likeunlike(e){
	// change like/unlike image, based on the current image
	if (e.source.image==="/likebtn.png"){
		e.source.image="/likebtnOn.png";
	}else{
		e.source.image="/likebtn.png";
	}
}

/*var vues = [];
for (var i = 0; i < 3; i++) {
    var imageVue = Titanium.UI.createImageView({ image:'/images/' + i + '.jpg' });
    vues.push(imageVue);
}
$.portefolio.views = vues;*/

// shows or hide the menu
var menuOpen = false;
function showhidemenu(e){
	if (!menuOpen){
		moveTo="300dp";
		menuOpen=true;
	
		//CERRAR
		
		
		var win = Ti.UI.createWindow({backgroundColor: 'black'});
		var fb = require('facebook');
		var profileImg = Ti.UI.createImageView({
			left:15,
            top:10,
            width:30,
            height:30,
            borderWidth:1,
            borderColor:'#bbb',
            borderRadius:8
		});
		
		
		fb.appid = '487368371402986';
		fb.permissions = ['publish_stream', 'read_stream','user_photos', 'friends_photos', ' user_events', 'friends_events'];
		//$.username.text = Alloy.Globals.User.name;
		
		Alloy.Globals.Facebook.addEventListener('logout', function(e) {
			
			//******************************
			// OBTENER FOTO DE FB DE USUARIO
			//******************************
        	var fbImageURL='';
        	fb.requestWithGraphPath('me', {}, 'GET', function(e) {
       		
	       		if (e.success) {
	          		var results = JSON.parse(e.result);
	          		var fbID = results.id;
	          		var fbImageURL= 'http://graph.facebook.com/'+fbID+'/picture';
	          		profileImg.image=fbImageURL;
	          	}
	          	
	          	else if (e.error) {
	         		alert(e.error);
	         	}
	         	
	         	else {
	            	alert('Respuesta desconocida');
	        	}
	        	
        	});
			
		//Alloy.Globals.User = {};
			alert('Sesión Cerrada');
		});
		    
		// Add the button.  Note that it doesn't need a click event listener.
		win.add(fb.createLoginButton({
		    bottom : 50,
		    style : fb.BUTTON_STYLE_WIDE
		}));
		win.add(profileImg);
		win.open();
	}
	
	else{
		moveTo="0";
		menuOpen=false;
	}

	
// have to set the current width of the "main" view before moving it so it doesn't get squeezed
// try commenting out the following line and setting the "newLeft" to 200 instead of 
// 300 to see what I mean
	$.main.width=Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left:moveTo,
		duration:100
	});
}

function showWincam(e){
	
	var win = Titanium.UI.createWindow({
		title:"Camara",
		backgroundColor:"#000000"
	});
	
	var button = Titanium.UI.createButton({
		title:"Usar Camara",
		width:Ti.UI.FILL,
		height:150,
		bottom:12,
		border: 1,
		borderColor: "FF0000",
		zIndex:2
	});
	
	win.add(button);
	button.addEventListener("click",function(e){
		Titanium.Media.showCamera({
			success:function(e){
				if(e.mediaType == Titanium.Media.MEDIA_TYPE_PHOTO){
					//It's a photo
					var imageView = Titanium.UI.createImageView({
						image:e.media,
						width:288,
						height:215,
						top:12,
						zIndex:1
						});
						win.add(imageView);
		}else if(e.mediaType == Titanium.Media.MEDIA_TYPE_VIDEO){
			//It's a video
			var w = Titanium.UI.createWindow({
				title:"New video",
				backgroundColor:"#000000"
			});
			
			var videoPlayer = Titanium.Media.createVideoPlayer({
				media:e.media
				
			});
			w.add(videoPlayer);
			
			videoPlayer.addEventListener("complete", function(e){
				w.remove(videoPlayer);
				videoPlayer = null;
				w.close();
			});
		}
	},
	error:function(e){
		alert("there was an error");
	},
	cancel:function(e){
		alert("the event was cancelled");
	},
	allowEditing:true,
	saveToPhotoGallery:true,
	mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO, Titanium.Media.MEDIA_TYPE_VIDEO],
	videoQuality:Titanium.Media.QUALITY_HIGH
	});
});

win.open();
	
}

function showWin2(e){
	var w=Alloy.createController('win2').getView();
	w.open();
}

// This bit listens to the orientation change and re-establishes the width 
// of the "main" view, allowing the layout to survive after orientation changes
Ti.Gesture.addEventListener('orientationchange', function(e) {
    $.main.width=Ti.Platform.displayCaps.platformWidth;
});

$.win1.open();
