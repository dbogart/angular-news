'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:SunsetCtrl
 * @description
 * # SunsetCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
  .controller('SunsetCtrl', function ($scope, $http) {

  $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
    .success(function(data){
    	console.log('data success');
    	console.log(data); // object seems fine
    	$scope.weather = data;
    })
    .error(function(){
    	console.log('data error');
    });

});
