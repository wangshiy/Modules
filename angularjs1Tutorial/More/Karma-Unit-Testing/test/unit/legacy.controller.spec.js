describe('The legacy user module', function () {
  beforeEach(module('legacy-user'));

  describe('user controller', function () {

    var userController;
    beforeEach(inject(function ($controller) {
      userController = $controller('UserController');
    }));

    it('should initialize the user name', function () {
      expect(userController.user.first_name).toEqual('Barry');
      expect(userController.user.last_name).toEqual('Allen');
    });

    it('should return the full name', function () {
      var user = {
        first_name: 'Oliver',
        last_name: 'Queen'
      };
      expect(userController.fullName(user)).toEqual('Oliver Queen');
    });
  });
});

describe('The legacy user module, with legacy $scope', function () {
  beforeEach(module('legacy-user'));

  var uc;
  beforeEach(inject(function ($controller) {
    uc = $controller('UserController as uc', { $scope: {} });
  }));

  it('should initialize the user name', function () {
    expect(uc.user.first_name).toEqual('Barry');
    expect(uc.user.last_name).toEqual('Allen');
  });

  it('should return the full name', function () {
    var user = {
      first_name: 'Oliver',
      last_name: 'Queen'
    };
    expect(uc.fullName(user)).toEqual('Oliver Queen');
  });
});
