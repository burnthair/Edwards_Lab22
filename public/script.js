var app = angular.module('quoteModule');

app.controller('quoteCtrl', function($scope) {
  // $scope.quote = response.data;
});

app.factory('quoteFactory', function($http){

  return {};

  $http({
    method: 'GET',
    url: '/test'
  }).then(function(response) {
  });

});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'quoteCtrl',
      templateUrl: 'display.html'
    })
    .otherwise({ redirectTo: '/'});
});
