myApp.factory('DataService', function ($http, $q) {
  var service = {};

  service.getData = function (searchString) {
    var deferred = $q.defer();
    var url = "http://api.giphy.com/v1/gifs/search?q=" + searchString + "&api_key=dc6zaTOxFJmzC";

    $http.get(url)
    .then(function (response) {
      var parsedArray = response.data.data.splice(0, 5);
      deferred.resolve(parsedArray);
    })
    .catch(function (err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

  return service;
});
