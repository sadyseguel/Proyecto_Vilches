		
		//******************************
		//FACEBOOKLOGUEO
		//******************************
		Ti.UI.backgroundColor='black';
		var win = Ti.UI.createWindow();
		/*var image = Ti.UI.createImageView({
  			image:'/images/default.png',
  			height: Ti.UI.FILL,
			width: Ti.UI.FILL
		});*/
		
		var profileImg = Ti.UI.createImageView({
 			left:15,
            top:10,
            width:30,
            height:30,
            borderWidth:1,
            borderColor:'#bbb',
            borderRadius:8
		});
		
		//******************************
		//PERMISO DE LOGUEO POR FB
		//******************************
		var fb = require('facebook');
		fb.appid = '487368371402986';
		fb.permissions = ['publish_stream'];
		fb.addEventListener('login', function showWin1(e) {
		    
		    if (e.success) {
		    
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
        	
        	//****************************************
			//PERMISO AUTORIZADO, PASA A LA VENTANA 1
			//****************************************	
			var w=Alloy.createController('win1').getView();
		    	w.open();
				alert('Sesión Iniciada'); 
			}
		});
		
		//******************************
		//CREACIÓN DE BOTOM DE CONNECT 
		//******************************
		
		win.add(fb.createLoginButton({
		    top : 50,
		    style : fb.BUTTON_STYLE_WIDE
		}));
		win.add(profileImg);
		win.open();
		
$.index.open();
