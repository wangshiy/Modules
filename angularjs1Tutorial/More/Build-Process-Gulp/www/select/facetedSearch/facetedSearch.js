; (function (angular) {
  angular.module('select.facetedSearch', [])
    .directive('facetedSearch', facetedSearch);

  function facetedSearch() {
    return {
      templateUrl: 'select/facetedSearch/facetedSearch.html',
      scope: {
        searchFields: '='
      }
    };
  }
}(angular));
