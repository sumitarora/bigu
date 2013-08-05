angular.module('bigu.controllers').controller('CategoriesCtrl', function ($scope, $log) {

$log.info("Categories controller initiated now");
$scope.showGrid = true;


$scope.categories = [
{name:"categories1", title:"Asha title"},
{name:"categories2", title:"Sumit Arora title"}];

$scope.addClicked = function(){
	$scope.categories.push({name:"Meenu", title:"Denik bhaskar"});
	/*
	$scope.showGrid = false;
	$log.info($scope.friend);
	$scope.friends.push($scope.friend);
	$scope.friend = {};*/

};

$scope.cancelClicked = function(){
	$scope.showGrid = true;
};
  

  

});