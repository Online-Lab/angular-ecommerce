'use strict';

describe('Service: UserAuthServise', function () {

  // load the service's module
  beforeEach(module('angularEcommerceApp'));

  // instantiate service
  var UserAuthServise;
  beforeEach(inject(function (_UserAuthServise_) {
    UserAuthServise = _UserAuthServise_;
  }));

  it('should do something', function () {
    expect(!!UserAuthServise).toBe(true);
  });

});
