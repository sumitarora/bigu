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

$scope.clickSave = function(){
	$log.info("Save Working");
	$scope.showGrid = true;
};

$scope.clickCancel = function(){
	$log.info("Cancel Working");
	$scope.showGrid = true;
};

$scope.courses = [
{title:'T1',category:'C1', website: 'W1', type: 'Type1', viewCount: 'VC1', rating: 'R1'},
{title:'T2',category:'C2', website: 'W2', type: 'Type2', viewCount: 'VC2', rating: 'R2'}
];

$scope.addCourse = function(){
	$log.info("Add Course Working");
	$scope.courses.push({title:'Title',category:'Category', website: 'Website', type: 'Type', viewCount: 'View Count', rating: 'Rating'});
};

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
angular.module('bigu.controllers').controller('SecondCtrl', function ($scope, $log) {

$log.info("second controller initiated");

  
  

});