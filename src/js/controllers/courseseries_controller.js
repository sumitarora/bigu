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