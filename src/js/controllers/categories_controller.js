angular.module('bigu.controllers').controller('CategoriesCtrl', function ($scope, $log) {

$log.info("Categories controller initiated now");
$scope.showGrid = true;

$scope.addClicked = function(){
	$scope.showGrid = false;
};

$scope.cancelClicked = function(){
	$scope.showGrid = true;
};
  
  

});