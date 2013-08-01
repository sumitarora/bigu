angular.module('bigu.controllers').controller('CourseSeriesCtrl', function ($scope, $log) {

$log.info("Course Series Controller");
$scope.showGrid = true;

$scope.clickAdd = function(){
	$log.info("Added");
	$scope.showGrid = false;
};

$scope.defaultValuesFunction(){
	$scope.course = {type: 'Series', viewCount:'1200', rating: '4.9'};
};

$scope.courses = [];

$scope.defaultValuesFunction();

$scope.clickSave = function(){
	$log.info("Save Working");
	$scope.showGrid = true;
	$log.info($scope.course);
	$scope.courses.push($scope.course);
	$scope.defaultValuesFunction();
};

$scope.clickCancel = function(){
	$log.info("Cancel Working");
	$scope.showGrid = true;
};

/*
$scope.friends = [];

$scope.friend = {};

$scope.add = function(){
	$log.info($scope.friend);
	$scope.friends.push($scope.friend);
	$scope.friend = {};
};*/


});