'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
  .controller('NewsCtrl', function ($scope, NewsService) {

    NewsService.articles().success(function(data) {
       	$scope.articles = data.articles;
        console.log(data);
    });
});
