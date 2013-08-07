angular.module('bigu.controllers').controller('VideosCtrl', function ($scope, $log) {
$log.info("Video Controller");

$scope.showGrid = true;
$scope.videos = [];
$scope.video = {};

$scope.clickAdd = function(){
	$log.info("Add Clicked");
	$scope.showGrid = false;
	
};

$scope.clickSave = function(){
	$log.info("Save Clicked");
	$log.info($scope.video,$scope.index);
	if($scope.index > -1)
	{
		$scope.videos[$scope.index] = $scope.video;
		$scope.index = -1;
	}
	else{
		$scope.videos.push($scope.video);
	}
	$scope.showGrid = true;
	$scope.video = {};
};

$scope.clickCancel = function(){
	$log.info("Cancel Clicked");
	$scope.showGrid = true;
};

$scope.clickDelete = function(video){
	$log.info(video);
	var index = $scope.videos.indexOf(video);
	$scope.videos.splice(index,1);
};

$scope.clickEdit = function(video){
	$log.info(video);
	$scope.video = angular.copy(video);
	$scope.showGrid = false;
	$scope.index = $scope.videos.indexOf(video);
};

});