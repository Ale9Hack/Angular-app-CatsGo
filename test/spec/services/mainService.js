'use strict';

describe('Service: mainService', function () {

  // load the service's module
  beforeEach(module('catsGoApp'));

  // instantiate service
  var mainService;
  beforeEach(inject(function (_mainService_) {
    mainService = _mainService_;
  }));

  it('randomArray testing', function () {
    var a=mainService.randomArray(4,5,1);
    expect(a).not.toBe(null)
    expect(!!mainService).toBe(true);
  });






});
