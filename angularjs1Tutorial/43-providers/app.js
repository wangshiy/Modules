(function (angular) {
  angular.module('app', [])
    .config((appSettingsProvider) => {
      // Comment this out to see the default settings
      appSettingsProvider.setSetting1('bar');
    })
    .controller('ProviderController', function (appSettings) {
      this.settings = appSettings;
      appSettings.getFreshData();
      appSettings.myCustomSetting = 'baz';
    })
    .provider('appSettings', function () {
      let setting1 = 3;
      return {
        setSetting1: function (s) {
          setting1 = s;
        },
        $get: function ($http /* Dependency injection */) {
          const data = {
            setting1: setting1,
            setting2: 'foo',
          };
          return {
            setSetting2: function (s) {
              data.setting2 = s;
            },
            getFreshData: function () {
              data.data = $http.get('data.json');
            }
          };
        }
      };
    });

}(angular));

