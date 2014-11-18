'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
    .controller('NewsRestangularCtrl', function ($scope, NewsService) {
        // useful to abstract getter/setter and other business logic away into services for brevity and testing...
        var _articles = NewsService.getArticles();
        $scope.articles = _articles.$object;
    });
