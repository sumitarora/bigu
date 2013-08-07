angular.module('bigu.controllers').controller('UserCtrl', function ($scope, $log) {

	


$log.info(" This is User controller ");
	$scope.showGrid = true;

	$scope.addClicked = function(){
		$log.info("Adding Detail");
		$scope.showGrid = false;
	};

	$scope.users = [
	{email:"meenubhagat91@yahoo.com" ,FName:"Meenu",LName:"Bhagat",profession:"Student",country:"India",facebook:"fb@facebook.com"},
	{email:"rubyverma@yahoo.com" ,FName:"Ruby",LName:"verma",profession:"Student",country:"Canada",facebook:"fb@facebook.com"},
	{email:"Arorasumit91@yahoo.com" ,FName:"Sumit",LName:"Arora",profession:"Student",country:"Canada",facebook:"fb@facebook.com"},
	{email:"sbhagat@yahoo.com" ,FName:"Sonia",LName:"Bhagat",profession:"Student",country:"India",facebook:"fb@facebook.com"}];

	$scope.addClicked = function(){
		$scope.showGrid = false;
		$scope.duser = {

		};

	};
	$scope.saveClicked = function(){
		$log.info("Add new detail")
		if($scope.index > -1){
			$scope.users[$scope.index] = $scope.duser;
			$scope.index = -1;
		}
		else{
			$scope.users.push($scope.duser);
		}
		$scope.showGrid = true;

	};

	$scope.cancelClicked = function(){
		$scope.showGrid = true;
	};

	

  });