'use strict';

angular.module('customFilter', []).filter('url', function() {
  return function(input) {
    return input.split('?client_source')[0];
  };
});