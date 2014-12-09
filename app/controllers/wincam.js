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