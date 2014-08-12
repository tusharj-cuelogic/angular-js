'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version',
        function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }
    ])
    .directive('headerContent', function() {
        return {
            restrict: 'AE',
            templateUrl: 'partials/header.html',
            controller: 'headerController'
        }
    })
    .directive('footerContent', function() {
        return {
            restrict: 'AE',
            transclude: false,
            templateUrl: 'partials/footer.html'
        }
    });
