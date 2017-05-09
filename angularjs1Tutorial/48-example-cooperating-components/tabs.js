(function (angular) {
  'use strict';

  // Adapted from the Angular component documentation

  angular.module('tabset', [])
    .component('myTabs', {
      transclude: true,
      controller: MyTabsController,
      templateUrl: 'tabset.html'
    })
    .component('myPane', {
      transclude: true,
      require: {
        tabsCtrl: '^myTabs'
      },
      bindings: {
        title: '@'
      },
      controller: MyPaneController,
      templateUrl: 'tab.html'
    });

  function MyTabsController() {
    const panes = this.panes = [];
    this.select = function (pane) {
      angular.forEach(panes, p => p.selected = false);
      pane.selected = true;
    };
    this.addPane = function (pane) {
      if (panes.length === 0) {
        this.select(pane);
      }
      panes.push(pane);
    };
  }

  function MyPaneController() {
    this.$onInit = function () {
      this.tabsCtrl.addPane(this);
      console.log(this);
    };
  }
}(angular));
