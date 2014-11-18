'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
    .controller('NewsCtrl', function ($scope, $http, $log) {

        $http.get('http://api.feedzilla.com/v1/articles.json')
            .success(function (data) {
                console.log('data success');
                console.log(data); // object seems fine
                $scope.articles = data.articles;
            })
            .error(function (err) {

                /***
                 * use angulars built-in $log facility for this vs. console.log (helps in testing and consistency)
                 * i.e. $log('data error, got error: '+err)
                 */
                $log.debug('Data error, got error: ' + err);
            });

    });
