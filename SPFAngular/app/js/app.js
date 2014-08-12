'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
run(['$rootScope', '$cookieStore', '$location', '$route',
    function($rootScope, $cookieStore, $location, $route) {
        // For each route change, check if the user is logged in or not
        $rootScope.$on("$routeChangeStart", function(event, next, current) {

            if (next.$$route.public === false) {
                // Login is required
                if ($cookieStore.get('loggedInUser') !== undefined || $cookieStore.get('loggedInUser') !== '' && $cookieStore.get('loggedInUser')) {
                    $rootScope.loggedIn = true;
                    $rootScope.username = $cookieStore.get('loggedInUser');
                } else {
                    // Not logged in
                    $rootScope.loggedIn = false;
                    $location.path("/login");
                }
            }
        });
    }
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
            public: true
        }).when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            // controller: 'dashboardController',
            public: false
        }).when('/logout', {
            controller: 'logoutController',
            redirectTo: '/login',
            public: false
        }).when('/users', {
            templateUrl: 'views/users-list.html',
            controller: 'userController',
            public: false
        }).when('/add-user', {
            templateUrl: 'views/add-user.html',
            // controller: 'addUserController',
            public: false
        })
        /*.otherwise({
            redirectTo: '/login'
        })*/
        ;
    }
]);
