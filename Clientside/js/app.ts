'use strict';
namespace atl {
  angular.module('atl', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: atl.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('Add', {
      url: '/add',
      templateUrl: '/templates/add.html',
      controller: atl.Controllers.addController,
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
