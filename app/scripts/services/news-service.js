'use strict';

angular.module('angularNewsApp.services', [])
  .factory('NewsService', ['$http', function($http) {

    var getArticles = function () {
      return $http.get('http://api.feedzilla.com/v1/articles.json');
    };
    
    return {
            articles: function() { return getArticles(); 
        },
    };
}]);