angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

	


$log.info("controller");

  
  $scope.friends = [
     { name:'Gulabo', lives:'Canada'},
       {name:'Bilo', lives:'India'}];


$scope.Click = function(){
	$scope.friends.push({name:'XYZ', lives:'Lives'});

};
  

});