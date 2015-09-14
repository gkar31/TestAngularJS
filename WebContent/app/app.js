var app = angular.module('myfirstangularapp', ['ngRoute','ui.bootstrap']);


app.config(['$routeProvider',
             function($routeProvider) { 
    $routeProvider
    .when('/cars', {
        templateUrl: 'list.html',
        controller: 'MyFirstController'
    })
    .when('/cars/:idxcar', {
        templateUrl: 'details.html',
        controller: 'CarController'
    }).when('/match', {
        templateUrl: 'select_match.html',
        controller: 'MatchController'
    })
    .otherwise({
        redirectTo: '/cars'
    });
}
]);




