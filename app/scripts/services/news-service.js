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
        // set the base url for all requests
        RestangularProvider.setBaseUrl('http://dailymed.nlm.nih.gov/dailymed/services/v2');

        // add a response intereceptor
        RestangularProvider.addResponseInterceptor(function (data, operation) {
            var extractedData, metadata;
            if (operation === "getList") {
                extractedData = data.data;
            } else {
                extractedData = data.data;
            }
            return extractedData;
        });

    })
    .service('SplService', function (Restangular) {
        var exports;
        exports = {};

        exports.getLabels = function () {
            return Restangular.all('spls.json').getList({marketing_category_code: 'C73594'});
        };

        exports.getApplicationByLabel = function (setid) {
            return Restangular.all('applicationnumbers.json').getList({setid: setid});
        };
        return exports;
    });

