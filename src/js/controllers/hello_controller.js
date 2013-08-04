angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

	


$log.info(" This is new controller ");
$scope.friends = [];
$scope.friend = {};

$scope.Click = function(){
	$log.info($scope.friend);
	$scope.friends.push($scope.friend);
	$scope.friend = {};


};
  
  });