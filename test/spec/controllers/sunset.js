'use strict';

describe('Controller: SunsetCtrl', function () {

  // load the controller's module
  beforeEach(module('angularNewsApp'));

  var SunsetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SunsetCtrl = $controller('SunsetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
