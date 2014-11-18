'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
  .controller('NewsCtrl', function ($scope, $http) {

  $http.get('http://api.feedzilla.com/v1/articles.json')
    .success(function(data){
    	console.log('data success');
    	console.log(data); // object seems fine
    	$scope.articles = data.articles;
    })
    .error(function(){
    	console.log('data error');
    });

});
