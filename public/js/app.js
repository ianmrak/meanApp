var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/form.html',
    controller: 'FormController'
  }).
  when('/form', {
    templateUrl: 'views/formHack.html',
    controller: 'FormController'
  }).
  when('/calc', {
    templateUrl: 'views/calc.html',
    controller: 'MathController'
  });
}]);
