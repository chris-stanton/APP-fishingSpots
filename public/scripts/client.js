

var myApp = angular.module('myApp', ['ngRoute', 'ngAlertify', '720kb.tooltips']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // $locationProvider.hashPrefix('');


  //routes
    $routeProvider
        .when ('/login', {
          templateUrl: './views/auth/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .when ('/register', {
          templateUrl: './views/auth/register.html',
          controller: 'RegisterController',
          controllerAs: 'reg'
        })
        .when ('/main', {
          templateUrl: './views/main.html',
          controller: 'MainController',
          controllerAs: 'mc',
          resolve: {
                getuser : function(UserService){
                return UserService.getuser();
              }
            }
        })
        .otherwise ( {
            redirectTo: '/login'
        });

}]);
