var myApp = angular.module('PugsLife', []);

myApp.controller('PugController', function ($scope, DataService) {

  $scope.addMessage = function (chatMessage) {

    DataService.getData(chatMessage)
    .then(function (response) {
      $scope.gifs = response;

      if (!response.length) $scope.noResults = true;
    })
    .catch(function (err) {
      console.warn(err);
    });

  };

});
