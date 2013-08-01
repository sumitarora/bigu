angular.module('bigu.controllers').controller('CategoriesCtrl', function ($scope, $log) {

$log.info("Categories controller initiated");

  
  

});
angular.module('bigu.controllers').controller('CourseSeriesCtrl', function ($scope, $log) {

$log.info("Course Series Controller");
$scope.showGrid = true;

$scope.clickAdd = function(){
	$log.info("Added");
	$scope.showGrid = false;
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
angular.module('bigu.controllers').controller('GridCtrl', function ($scope, $log) {

$log.info("controller");
$scope.showGrid = false;

  
  

});
angular.module('bigu.controllers').controller('SampleCtrl', function ($scope, $log) {

  /*
  This is the syntax to create the new controllers. 
  They must be created within this folder only.
  If you have any error you must check the log by pressing F12.
  */
  $log.info("Sample controller instantiated.");
  $scope.sample = "Sample text goes here";
  $scope.name = "sumit master mind";

  $scope.btnclicked = function() {
    $scope.sample = "You clicked the button" + (new Date()).toTimeString();
  };

});
angular.module('bigu.controllers').controller('SecondFormCtrl', function ($scope, $log) {

$log.info("second controller initiated");

  
  

});