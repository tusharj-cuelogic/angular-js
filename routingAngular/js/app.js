var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'view/home.html',
            // controller: 'homeController',
            pageTitle: 'Home',
            page: 'home'
        }).
        when('/about-us', {
            templateUrl: 'view/about-me.html',
            // controller: 'aboutMeController'
        }).
        when('/careers', {
            templateUrl: 'view/careers.html',
            // controller: 'careersController'
        }).
        when('/cuelogic/clients', {
            templateUrl: 'view/clients.html',
            // controller: 'clientsController'
        }).
        when('/join-us', {
            templateUrl: 'view/join-us.html',
            // controller: 'termsController'
        }).
        when('/terms-and-conditions', {
            templateUrl: 'view/terms.html',
            // controller: 'termsController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]).directive('headerContent', function() {
    return {
        restrict: 'E',
        templateUrl: 'view/partials/header.html'
    }
}).directive('footerContent', function() {
    return {
        restrict: 'E',
        templateUrl: 'view/partials/footer.html'
    };
});
