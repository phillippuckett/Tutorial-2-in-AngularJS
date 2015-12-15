angular.module('userProfiles').controller('mainCtrl', function ($scope, mainSvc) {
	//	$scope.testCtrl = "mainCtrl is dblBound to intrFace";
	$scope.getUsers = function () {
		$scope.users = mainSvc.getUsers();
	}
	$scope.getUsers();
});