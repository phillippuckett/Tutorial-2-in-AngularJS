angular.module('userProfiles').controller('mainCtrl', function ($scope, mainSvc) {
	// $scope.testCtrl = "mainCtrl is dblBound to intrFace";
	$scope.users = mainSvc.getUsers();
	// console.log($scope.getUsers());
});