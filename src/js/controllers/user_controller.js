angular.module('bigu.controllers').controller('UserCtrl', function ($scope, $log) {

	


$log.info(" This is User controller ");
	$scope.showGrid = true;

	$scope.addClicked = function(){
		$log.info("Adding Detail");
		$scope.showGrid = false;
	};

	$scope.users = [
	{email:"meenubhagat91@yahoo.com" ,FName:"Meenu",LName:"Bhagat",Profession:"Student",Country:"India"}];

	$scope.cancelClicked = function(){
		$scope.showGrid = true;
	};

	

  });