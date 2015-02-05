var app = angular.module('MyApp', ['ui.bootstrap', 'ngMessages', 'ngRoute']);

app.controller('TacoController', ['$scope', '$http', function($scope, $http) {
  $scope.greeting = "Hello World from the Taco";
}]);

app.controller('BurritoController', ['$scope', '$http', function($scope, $http) {
  $scope.greeting = "This is the Burrito Controller";
}]);

app.controller('ProfileController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.name = $routeParams.name
}]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/page1.html',
      controller: 'TacoController'
    })
    .when('/about', {
      templateUrl: '/page2.html',
      controller: 'BurritoController'
    })
    .when('/contact', {
      templateUrl: '/page3.html',
      controller: 'TacoController'
    })
    .when('/profiles/:name', {
      templateUrl: '/profile.html',
      controller: 'ProfileController'
    })

    $locationProvider.hashPrefix('!');
    // $locationProvider.html5Mode(true).hashPrefix('!');


}]);
