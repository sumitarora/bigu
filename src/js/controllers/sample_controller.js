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