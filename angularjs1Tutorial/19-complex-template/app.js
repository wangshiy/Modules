(function (angular) {
  'use strict';

  angular.module('app1', [])
    .component('countryDetail', {
      templateUrl: 'country-detail.html',
      controller: CountryDetailController,
      controllerAs: 'cd'
    })
    .service('countryDetailService', CountryDetailService);

  function CountryDetailController(countryDetailService) {
    const cd = this;
    cd.showEthnicGroups = true;
    cd.showGovt = true;
    cd.otherInfo = '';

    cd.toggleGovt = function () {
      cd.showGovt = !cd.showGovt;
    };

    countryDetailService.get('usa')
      .then(data => cd.country = data);

    this.calculateClass = g => {
      return {
        highlight: g.pct > 10,
        highlight2: g.pct > 15
      };
    };
  }

  function CountryDetailService($http) {
    this.get = function (country) {
      return $http.get('../demo-data/' + country + '.json')
        .then(response => response.data);
    };
  }

}(angular));
