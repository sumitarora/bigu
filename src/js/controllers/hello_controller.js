angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

	


$log.info(" This is my new controller ");
$scope.friends = [];
$scope.friend = {};

$scope.Click = function(){
	$log.info($scope.friend);
	$scope.friends.push($scope.friend);
	$scope.friend = {};


};

 $scope.deleteClick = function(friend) {
	$log.info(friend);
	var index = $scope.friends.indexOf(friend);
	$scope.friends.splice(index, 1);
  };

$scope.editClick = function(friend) {
	$log.info(friend);
	friend.name = $scope.friend.name;
	friend.lives = $scope.friend.lives;
  };

  });