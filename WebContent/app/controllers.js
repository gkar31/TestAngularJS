

angular.module('myfirstangularapp').controller("MyFirstController",function ($rootScope, $scope,  carsdata ) {
	
    $scope.helloMsg="MuscleCars";
    $scope.currentcar=0;
    $scope.car={};
    $scope.cars=carsdata.getCars();
    
    $scope.getCars=function(){
    	return $scope.cars;
    };
    
    
    $scope.msg=function(txtmsg){
    	alert(txtmsg);
    };
    
    $scope.loadCar=function(idxcar){
    	$scope.car=$scope.cars[idxcar];
    	
    	carsdata.setCurrentCar(idxcar);
    };
});


angular.module('myfirstangularapp').controller('CarController', function($scope,  $routeParams, carsdata) {
	$scope.car=carsdata.getCurrentCar();
	$scope.cars=carsdata.getCars();
	
	init();

    function init() {
        //Grab customerID off of the route        
        var carIdx = ($routeParams.idxcar) ? parseInt($routeParams.idxcar) : 1;
        if (carIdx > 0) {
        	
            $scope.car = carsdata.getCar(carIdx);
        }
    }
	
	$scope.$on('currentcar', function (event, args) {
		 $scope.car = args;
		 console.log($scope.car);
		 });
  });



angular.module('myfirstangularapp').controller('MatchController', function($scope, carsdata) {
	$scope.cars=carsdata.getCars();
    $scope.car1 = undefined;
	$scope.car2 = undefined;
	
	$scope.ocar1 = {};
	$scope.ocar2 = {};
	
	$scope.matchresult={
			c1: "0-100 km/h",
			c1o1: undefined,
			c1o2: undefined
	};
	
	$scope.selectedcars1=function(){
		var datas=[];
		$scope.matchresult.c1o1 = undefined;
		datas=carsdata.getCars().map(function(item){
		console.log("car 2 :"+$scope.car2);
			if ($scope.car2 != item.marque.concat(" ",item.nom," ",item.serie)){
	        return item.marque+" "+item.nom+" "+item.serie;
			}
	      });
		return datas;
	};
	
	$scope.selectedcars2=function(){
		var datas=[];
		$scope.matchresult.c1o1 = undefined;
		datas=carsdata.getCars().map(function(item){
		console.log("car 1 :"+$scope.car1);
			if ($scope.car1 != item.marque.concat(" ",item.nom," ",item.serie)){
	        return item.marque+" "+item.nom+" "+item.serie;
			}
	      });
		return datas;
	};
	
	$scope.match=function(){
	
		for(i=0; i<carsdata.getCars().length;i++){
			var icar=carsdata.getCars()[i];
			if ($scope.car1 == icar.marque.concat(" ",icar.nom," ",icar.serie)){
				$scope.ocar1=icar;
			};
			if ($scope.car2 == icar.marque.concat(" ",icar.nom," ",icar.serie)){
				$scope.ocar2=icar;
			}
		}
		
		if ($scope.ocar1.acc_0_100 < $scope.ocar2.acc_0_100){
			$scope.matchresult.c1o1=100;
			$scope.matchresult.c1o2=0;
		}else {
			$scope.matchresult.c1o1=0;
			$scope.matchresult.c1o2=100;
		}
			
	};
});