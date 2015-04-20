var app = angular.module("app", ['onsen']);

app.controller("proflist", function($scope, $http) {
  $http.get('http://localhost:8080/professors').
    success(function(data, status, headers, config) {
      $scope.profs = data;
    });
});
