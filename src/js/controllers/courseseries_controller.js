angular.module('bigu.controllers').controller('CourseSeriesCtrl', function ($scope, $log) {

$log.info("Course Series Controller");
$scope.showGrid = true;

$scope.clickAdd = function(){
	$log.info("Added");
	$scope.showGrid = false;
	$scope.defaultValuesFunction();
};

$scope.clickEdit = function(course){
	$log.info(course);
	$scope.course = angular.copy(course);
	$scope.showGrid = false;
	$scope.index = $scope.courses.indexOf(course);
};

$scope.clickDelete = function(course){
	$log.info(course);
	var index = $scope.courses.indexOf(course);
	$scope.courses.splice(index,1);
};


$scope.defaultValuesFunction =function(){
	$scope.course = {type: 'Series', viewCount:'1200', rating: '4.9'};
};

$scope.courses = [];

$scope.defaultValuesFunction();

$scope.clickSave = function(){
	$log.info("Save Working");
	$scope.showGrid = true;
	$log.info($scope.course);
	if($scope.index > -1){
		$scope.defaultValuesFunction();
		$log.info($scope.course);
		$scope.index = -1;
	}
	else{
			$scope.courses.push($scope.course);
	}
};

$scope.clickCancel = function(){
	$log.info("Cancel Working");
	$scope.showGrid = true;
};


$scope.friends = [];

$scope.friend = {};

$scope.add = function(){
	$log.info($scope.friend);
	$scope.friends.push($scope.friend);
	$scope.friend = {};
};



 $scope.deleteClicked = function(friend) {
	$log.info(friend);
	var index = $scope.friends.indexOf(friend);
	$scope.friends.splice(index, 1);
  };

$scope.editClicked = function(friend) {
	$log.info(friend);
	friend.name = $scope.friend.name;
	friend.lives = $scope.friend.lives;
  };



});