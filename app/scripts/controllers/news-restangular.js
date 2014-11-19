'use strict';

/**
 * @ngdoc function
 * @name angularNewsApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the angularNewsApp
 */
angular.module('angularNewsApp')
    .controller('NewsRestangularCtrl', function ($scope, SplService) {
        // useful to abstract getter/setter and other business logic away into services for brevity and testing...
        var _items;
        _items = SplService.getLabels().$object;
        $scope.items = _items;

        $scope.getApplication = function (item) {
            SplService.getApplicationByLabel(item.setid).then(function (application) {
                if (application.length > 0) {
                    var nda_num = application[0].application_number;
                    $scope.nda = nda_num;
                    item.application_number = nda_num;
                } else {
                    item.application_number = "NOT_FOUND";
                }
            });
        };
    });
