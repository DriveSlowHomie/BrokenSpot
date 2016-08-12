'use strict';
var atl;
(function (atl) {
    angular.module('atl', ['ui.router', 'ngResource', 'ui.bootstrap'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
})(atl || (atl = {}));
