describe('The user module', function () {
  beforeEach(module('user'));
  describe('user controller', function () {

    var $ctrl;
    beforeEach(inject(function ($componentController) {
      $ctrl = $componentController('userDisplay', { $scope: {} });
    }));

    it('should initialize the user name', function () {
      expect($ctrl.user.first_name).toEqual('Barry');
      expect($ctrl.user.last_name).toEqual('Allen');
    });

    it('should return the full name', function () {
      var user = {
        first_name: 'Oliver',
        last_name: 'Queen'
      };
      expect($ctrl.fullName(user)).toEqual('Oliver Queen');
    });
  });
});
