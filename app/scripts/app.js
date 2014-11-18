'use strict';

/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name angularNewsApp
 * @description
 * # angularNewsApp
 *
 * Main module of the application.
 */

// hoist var declaration
var app;
app = angular
    .module('angularNewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angularNewsApp.services'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/news.html',
                controller: 'NewsCtrl'
            })
            .when('/news', {
                templateUrl: 'views/news.html',
                controller: 'NewsCtrl'
            })
            .when('/news/restangular', {
                templateUrl: 'views/news-restangular.html',
                controller: 'NewsRestangularCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
