<<<<<<< HEAD
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
angular.module('bigu.controllers').controller('FirstCtrl', function ($scope, $log) {

$log.info("Testing Controller");


});
angular.module('bigu.controllers').controller('GridCtrl', function ($scope, $log) {

$log.info("Grid Controller");
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
=======
<<<<<<< HEAD
angular.module('bigu.controllers').controller('DetailCtrl', function ($scope, $log) {

$log.info("Detail controller initiated");

  
  
>>>>>>> a3a10fdec2b71348b2d94439f12e2165de8942fb

});
angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

$log.info("controller");

  
  

});
<<<<<<< HEAD
=======
=======
angular.module('bigu.controllers').controller('FirstCtrl', function ($scope, $log) {

$log.info("Testing Controller");

});
angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

$log.info("controller");

  
  

});
>>>>>>> 861690bcafdc44d1721cd6cb4e6d2c4951a7bdb6
>>>>>>> a3a10fdec2b71348b2d94439f12e2165de8942fb
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