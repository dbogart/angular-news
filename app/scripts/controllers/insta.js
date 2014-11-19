'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:InstaCtrl
 * @description
 * # InstaCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
  .controller('InstaCtrl', function ($scope, InstaService) {

    InstaService.pics('adverseevents').success(function(data) {
       	$scope.pics = data.data;
        console.log(data);
    });
});

