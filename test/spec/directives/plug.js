'use strict';

describe('Directive: plug', function () {

  // load the directive's module
  beforeEach(module('catsGoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<plug></plug>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the plug directive');
  }));
});
