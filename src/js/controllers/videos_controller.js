angular.module('bigu.controllers').controller('VideosCtrl', function ($scope, $log) {
$log.info("Video Controller");

$scope.showGrid = true;
$scope.videos = [];
$scope.video = {};
$scope.searchBy = "";
$scope.showSearchAll = true;
$scope.showSearchTitle = false;
$scope.showSearchWebsite = false;
$scope.showSearchUrl = false;
$scope.showSearchCsid = false;

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

$scope.clickEdit = function(video){
	$log.info(video);
	$scope.video = angular.copy(video);
	$scope.showGrid = false;
	$scope.index = $scope.videos.indexOf(video);
};

$scope.clickDelete = function(video){
	$log.info(video);
	var index = $scope.videos.indexOf(video);
	$scope.videos.splice(index,1);
};

$scope.searchByChange = function(){
	$log.info($scope.searchBy);
	if($scope.searchBy === ""){
		$scope.showSearchAll = true;
		$scope.showSearchTitle = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchCsid = false;
	}
	else if($scope.searchBy === "1"){
		$scope.showSearchAll = false;
		$scope.showSearchTitle = true;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchCsid = false;
	}
	else if($scope.searchBy === "2"){
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchWebsite = true;
		$scope.showSearchUrl = false;
		$scope.showSearchCsid = false;
	}
	else if($scope.searchBy === "3"){
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = true;
		$scope.showSearchCsid = false;
	}
	else if($scope.searchBy === "4"){
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchCsid = true;
	}
};

});