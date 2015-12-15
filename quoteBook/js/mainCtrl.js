angular.module('quoteBook').controller('mainCtrl', function ($scope, mainSvc) {
	// $scope.testCtrl = "mainCtrl is dblBound to intrFace";
	$scope.addQuote = function (obj) {
		mainSvc.addData(obj);
	}
	$scope.quotes = mainSvc.getData();
	$scope.removeQuote = function (obj) {
		mainSvc.removeData(obj);
	}
});
