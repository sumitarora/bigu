angular.module('bigu.controllers').controller('CourseSeriesCtrl', function ($scope, $log) {

$log.info("Course Series");

$scope.save = function(){
	$log.info("Saved!");
};

$scope.cancel = function(){
	$log.info("Cancelled");
};

$scope.test = "Testing";

});