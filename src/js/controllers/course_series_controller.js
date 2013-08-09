angular.module('bigu.controllers').controller('CourseSeriesCtrl', function ($scope, $log) {

$log.info("course series controller");

$scope.showGrid = true;
$scope.courses = [];
$scope.searchBy = "";
$scope.showSearchAll = true;
$scope.showSearchTitle = false;
$scope.showSearchCategory = false;
$scope.showSearchWebsite = false;
$scope.showSearchUrl = false;
$scope.showSearchType = false;

$scope.defaultValuesFunction = function(){
	$scope.course = {type: 'Series'};
	$scope.showGrid = false;
};

$scope.clickAdd = function(){
	$log.info("add clicked");
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

$scope.clickSave = function(){
	$log.info("save clicked");
	$log.info($scope.course, $scope.index);

	if($scope.index > -1){
		$scope.courses[$scope.index] = $scope.course;
		$scope.index = -1;
	}
	else{
			$scope.courses.push($scope.course);
	}
	$scope.showGrid = true;
};

$scope.clickCancel = function(){
	$log.info("cancel clicked");
	$scope.showGrid = true;
};

$scope.searchByChange = function(){
	$log.info($scope.searchBy);
	if($scope.searchBy === "")
	{
		$scope.showSearchAll = true;
		$scope.showSearchTitle = false;
		$scope.showSearchCategory = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchType = false;
	}
	else if($scope.searchBy === "1")
	{
		$scope.showSearchAll = false;
		$scope.showSearchTitle = true;
		$scope.showSearchCategory = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchType = false;
	}
	else if($scope.searchBy === "2")
	{
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchCategory = true;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchType = false;
	}
		else if($scope.searchBy === "3")
	{
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchCategory = false;
		$scope.showSearchWebsite = true;
		$scope.showSearchUrl = false;
		$scope.showSearchType = false;
	}
		else if($scope.searchBy === "4")
	{
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchCategory = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = true;
		$scope.showSearchType = false;
	}
		else if($scope.searchBy === "5")
	{
		$scope.showSearchAll = false;
		$scope.showSearchTitle = false;
		$scope.showSearchCategory = false;
		$scope.showSearchWebsite = false;
		$scope.showSearchUrl = false;
		$scope.showSearchType = true;
	}
};

//friends
/*
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
  //ends here
*/


});