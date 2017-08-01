var app = angular.module('quoteModule');

app.controller('quoteCtrl', function($scope, $http, $timeout) {

  var returnedQuotes = $http({
    method: 'GET',
    url: '/test'
  });

  $scope.quote = returnedQuotes.$$state;

  $timeout(function(){
    for (var i = 0; i < 4; i++) {
      return i;
    }
  }, 3000);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'quoteCtrl',
      templateUrl: 'display.html'
    })
    .otherwise({ redirectTo: '/'});
});
