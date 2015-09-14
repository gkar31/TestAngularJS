
angular.module('myfirstangularapp').factory('carsdata',  function() {
	 var factory={};
	 var currentcar=0;
	 var cars =[
	               {idcar: 1, marque: "Dodge", nom: "Challenger", serie: "SRT HEMI", acc_0_100: 3.8, image: "http://www.mustseecenter.com/wp-content/uploads/2015/04/dodge-challenger-srt8-392.jpg" },
	               {idcar: 2, marque: "Ford", nom: "Mustang", serie: "Shelby GT 500 Super Snake", acc_0_100: 3.9, image: "http://www.madness-us-cars.com/jpg/ford-mustang-cabriolet.jpg"},
	               {idcar: 3, marque: "Chevrolet", nom: "Camaro", serie: "Z28", acc_0_100: 4.2, image: "http://demo.premopress.com/wpautomall/wp-content/uploads/2013/04/chevy_camaro_2010.jpg"},
	               {idcar: 4, marque: "Dodge", nom: "Charger", serie: "SRT HELLCAT", acc_0_100: 3.7, image: "http://images.chryslercanada.ca/imagesAS/iof.php?width=598&year=2015&image=CC15_LDDT48_2DT_PXT_APA_XXX_XXX_XXX.png"}
	               ];
 
	  factory.getCars=function(){
		return cars;  
	  };
	  
	  
	  factory.setCurrentCar=function(idxcar){
		  currentcar=idxcar;
	  };
	  
	  factory.getCurrentCar=function(){
		  return cars[currentcar];
	  };
	  
	  factory.getCar=function(idxcar){
		  return cars[idxcar];
	  };
	  
	  return factory;
	});


var CARLIST=function(){
	var cars =[
               {idcar: 1, marque: "Dodge", nom: "Challenger", serie: "SRT HEMI", acc_0_100: 11.5, image: "http://srv2.betterparts.org/images/dodge-challenger-08.jpg" },
               {idcar: 2, marque: "Ford", nom: "Mustang", serie: "GT", acc_0_100: 11.6, image: "http://www.madness-us-cars.com/jpg/ford-mustang-cabriolet.jpg"},
               {idcar: 3, marque: "Chevrolet", nom: "Camaro", serie: "ZL1", acc_0_100: 11.7, image: "http://fr.thecarspictures.com/wp-content/uploads/2015/07/chevrolet_camaro.jpg"}];

	return cars;
};

angular.module('myfirstangularapp').constant('carsList', CARLIST);