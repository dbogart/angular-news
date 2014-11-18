/**
 * @ngdoc service
 * @name angularNewsApp.NewsService
 * @description
 * A general purpose service that handles all of the restangular logic
 * for custom getters/setters etc. so that you can abstract this functionality
 * out of your controllers.
 *
 * @requires restangular
 *
 * */

'use strict';

angular.module('angularNewsApp.services', ['restangular'])
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://api.feedzilla.com/v1');
        // add a response intereceptor
        RestangularProvider.addResponseInterceptor(function (data, operation) {
            var extractedData;
            if (operation === "getList") {
                extractedData = data.articles;
            } else {
                extractedData = data;
            }
            return extractedData;
        });

    })
    .service('NewsService', function (Restangular) {
        var _service, getter;
        _service = {};
        getter = Restangular;

        _service.getCultures = function () {
            return getter.all('cultures.json').getList();
        };

        _service.getArticles = function () {
            var articles = getter.all('articles.json').getList();
            return articles;
        };

        return _service;
    });

