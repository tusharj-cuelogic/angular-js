angular.module('app')
	.controller('headerController', ['$scope', '$route', function($scope, $route) {
		// Get the current page
		var currentPage = $route.current.$$route.page;
		console.log(currentPage);
	}]);
