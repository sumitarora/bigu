angular.module('bigu.controllers').controller('CategoriesCtrl', function ($scope, $log) {

$log.info("Categories controller initiated");

  
  

});
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
angular.module('bigu.controllers').controller('DetailCtrl', function ($scope, $log) {

$log.info("Detail controller initiated");

  
  

});
angular.module('bigu.controllers').controller('FirstCtrl', function ($scope, $log) {

$log.info("Testing Controller");


});
angular.module('bigu.controllers').controller('GridCtrl', function ($scope, $log) {

$log.info("controller");
$scope.showGrid = false;

  
  

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

});
angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

$log.info("controller");

  
  

});
angular.module('bigu.controllers').controller('SampleCtrl', function ($scope, $log) {

  $log.info("Sample controller instantiated.");
  $scope.showGrid = true;

  $scope.friends = [
    {name:'Gulabo', lives:'Canada'},
    {name:'Bilo', lives:'India'}
  ];
  $scope.friend = {};
  $scope.editIndex = -1;

  $scope.addClicked = function() {
    $scope.showGrid = false;
    $scope.editIndex = -1;
  };

  $scope.cancelClicked = function() {
    $scope.showGrid = true;
  };

  $scope.saveData = function(form) {
    if($scope.editIndex === -1){
      $scope.friends.push($scope.friend);
    }else{
      $scope.friends[$scope.editIndex].name = $scope.friend.name;
      $scope.friends[$scope.editIndex].lives = $scope.friend.lives;
    }

    $scope.friend = {};
    $scope.cancelClicked();
  };

  $scope.editClicked = function(friend) {
    $scope.friend = angular.copy(friend);
    $scope.editIndex = $scope.friends.indexOf(friend);
    $scope.showGrid = false;
  };

  $scope.deleteClicked = function(friend) {
    var index = $scope.friends.indexOf(friend);
    $scope.friends.splice(index, 1);
  };

});
angular.module('bigu.controllers').controller('SecondFormCtrl', function ($scope, $log) {

$log.info("second controller initiated");

  
  

});