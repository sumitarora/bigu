angular.module('bigu.controllers').controller('CategoriesCtrl', function ($scope, $log) {

$log.info("Categories controller initiated now");
$scope.showGrid = true;

$scope.addClicked = function(){
	$log.info("Add Clicked");
	$scope.showGrid = false;
	
};

$scope.categories = [
{title:"Title ", parent:" Parent ",type:" Type"},
{title:"PHP ", parent:" main ",type:" Programming language"},
{title:"JAVA ", parent:" web ",type:" Programming language "},
{title:"Cobal ", parent:" website ",type:" Programming language "},
{title:"udmey ", parent:" main ",type:" Programming language "}];




$scope.addClicked = function(){
	/*$scope.categories.push({title:"Programming Language" , type:"main" ,parent:"web"});*/
	$scope.showGrid = false;
	$scope.category = {

};
};

$scope.saveClicked = function(){

if($scope.index > -1){
  $scope.categories[$scope.index] = $scope.category;
  $scope.index = -1;
  }
  else{
  $scope.categories.push($scope.category);
  }
  $scope.showGrid = true;
};

$scope.cancelClicked = function(){
	$scope.showGrid = true;
};
  
$scope.deleteClicked = function(category){
	$log.info("delete category",category);
	var index = $scope.categories.indexOf(category);
	$scope.categories.splice(index, 1);


};
$scope.editClicked = function(category){
	$log.info(category);
	$scope.category = angular.copy(category);
	$scope.showGrid = false;
	$scope.index = $scope.categories.indexOf(category);

};
  

});