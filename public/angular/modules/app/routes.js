angular.module('app').config(function($routeProvider) {
  $routeProvider
  .when('/register', {
    templateUrl: 'app/templates/get_name.html',
    controller: 'GetNameCtrl'
  })
  .when('/get-languages', {
    templateUrl: 'app/templates/get_languages.html',
    controller: 'GetLanguagesCtrl'
  })
  .when('/finalize', {
    templateUrl: 'app/templates/finalize.html',
    controller: 'FinalizeCtrl'
  })
  .otherwise({ redirectTo: '/register' });
});
