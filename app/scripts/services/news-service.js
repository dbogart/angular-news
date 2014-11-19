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

    }])
    .factory('InstaService', ['$http', function($http) {

    var getPics = function (tag) {
      return $http.jsonp('https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=29a2e1bc7f0542cc8926cdee3f5e5053&callback=JSON_CALLBACK');
    };
    
    return {
            pics: function(tag) { return getPics(tag); 
        },
    };
}]);