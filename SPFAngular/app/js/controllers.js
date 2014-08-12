'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('headerController', ['$scope', '$location',
        function($scope, $location) {
            $scope.isActive = function(route) {
                return route === $location.path();
            }
        }
    ])
    .controller('loginController', ['$scope', '$rootScope', '$location', '$cookieStore',
        function($scope, $rootScope, $location, $cookieStore) {

            // Check if already logged in
            if ($cookieStore.get('loggedInUser') != undefined && $cookieStore.get('loggedInUser') != '') {
                $location.path('/dashboard');
            }
            $scope.user = {};

            $scope.validateLogin = function() {
                console.log('validating');
                // JSON of all the valid users
                var validUsers = '{"tushar.980@rediffmail.com": "123456", "tushar@gmail.com": "123"}',
                    objValidUsers = JSON.parse(validUsers);

                if ($scope.user.email && objValidUsers[$scope.user.email] !== undefined) {
                    // Valid email id

                    if ($scope.user.password && objValidUsers[$scope.user.email] == $scope.user.password) {
                        // Valid User Password
                        $cookieStore.put('loggedInUser', $scope.user.email);
                        $rootScope.loggedIn = true;
                        $rootScope.username = $cookieStore.get('loggedInUser');

                        // $rootScope.dashboard-page = true;

                        // Redirect to dashboard
                        $location.path('/dashboard');
                    } else {
                        // Invalid User Password
                        $scope.user.error = true;
                        $scope.user.message = 'Email id and Password do not match';
                    }
                } else {
                    // Invalid email id
                    $scope.user.error = true;
                    $scope.user.message = 'Invalid email id';
                }
            }
        }
    ]).controller('logoutController', ['$scope', '$rootScope', '$location', '$cookieStore',
        function($scope, $rootScope, $location, $cookieStore) {
            $scope.logoutUser = function() {
                $cookieStore.remove('loggedInUser');
                $rootScope.loggedIn = false;
                $location.path('/login');
            }
        }
    ]).controller('userController', ['$scope', '$rootScope', '$location',
        function($scope, $rootScope, $location) {
            $scope.users = [{
                'name': 'Tushar Jadhav',
                'email': 'tushar@gamil.com',
                'age': 23
            }, {
                'name': 'Jason Buhle',
                'email': 'jason@borne-digital.com',
                'age': 29
            }, {
                'name': 'John Heizleman',
                'email': 'john@borne-digital.com',
                'age': 24
            }];
        }
    ]);
