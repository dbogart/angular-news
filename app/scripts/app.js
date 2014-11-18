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

var app = angular
  .module('angularNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
