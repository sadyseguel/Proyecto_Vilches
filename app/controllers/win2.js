var selected_location = '';
Titanium.Geolocation.getCurrentPosition( function(e) {
	if (!e.success) {
    	alert('Not able to retrieve location');
        return;
    }
    
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;//
    
    $.mapview.setRegion({
    	animate: "true",
    	latitude: latitude,
    	longitude: longitude,
    	latitudeDelta: 0.01,
    	longitudeDelta: 0.01	
    });
});
$.win2.open(); 

function closeme(){
	$.container.close();
}


getTodoList();
		

function getTodoList () {
	var sendit = Ti.Network.createHTTPClient({
		onerror: function(e){
			Ti.API.debug(e.error);
			alert('There was an error during the conexion');
		},
		timeout:1000,
	});
	sendit.open('GET', 'http://www.servisoft.cl/movil/leer_datos_sady.php');  
	sendit.send();
		
	sendit.onload = function(){
			var json = JSON.parse(this.responseText);
			parseData(json);			
		 };
	};
	
	var parseData = function(json){
		_.each(json,function(local){
			$.mapview.addAnnotation(Alloy.Globals.Map.createAnnotation({
		        latitude: local.latitude,
		    	longitude: local.longitude,
		    	title: local.title,
		    	subtitle: local.subtitle,
		    	pincolor: Alloy.Globals.Map.ANNOTATION_RED,
		    	id:local.id
		    	})
			);
		});

	};
