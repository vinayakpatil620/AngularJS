var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'template/home.html',
			controller: 'StudentController'
		})
		.when('/viewStudents', {
			templateUrl: 'template/viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('StudentController', function($scope) {
	$scope.students = [
		{name: 'akshay', city:'belgaum'},
		{name: 'karan', city:'London'},
		{name: 'John ', city:'goa'}
	];

	$scope.message = "Click here";
});