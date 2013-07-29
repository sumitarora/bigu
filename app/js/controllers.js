angular.module('bigu.controllers').controller('FirstCtrl', function ($scope, $log) {

$log.info("Testing Controller");

});
angular.module('bigu.controllers').controller('HelloCtrl', function ($scope, $log) {

$log.info("controller");

  
  

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