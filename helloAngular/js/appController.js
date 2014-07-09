var app = angular.module('app', []);

/*app.controller('myController', function($scope) {
    $scope.message = 'Hello World!';
});*/


// Custom directive
app.directive('showMessage', function() {
	return {
		'restrict': 'E',
		'templateUrl': 'view/message-view.html',
		'controller': function($scope) {
			$scope.message = 'Hello World!';
		}
	}
});
