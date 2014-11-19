'use strict';

describe('Controller: InstaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularNewsApp'));

  var InstaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstaCtrl = $controller('InstaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
