'use strict';
var SpotApp;
(function (SpotApp) {
    angular.module('SpotApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps', 'ngGeolocation'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAU-rA_HwaG5ZTXLE5D8ieJVumBFkWaxAk',
        });
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: SpotApp.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('MarkPage', {
            url: '/markPage',
            templateUrl: '/templates/markPage.html',
            controller: SpotApp.Controllers.MarkPageController,
            controllerAs: 'vm'
        }).state('ExplorePage', {
            url: '/explorePage',
            templateUrl: '/templates/explorePage.html',
            controller: SpotApp.Controllers.ExplorePageController,
            controllerAs: 'vm'
        }).state('HitPage', {
            url: '/hitPage',
            templateUrl: '/templates/hitPage.html',
            controller: SpotApp.Controllers.HitPageController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDQSxZQUFZLENBQUM7QUFDYixJQUFVLE9BQU8sQ0FzQ2hCO0FBdENELFdBQVUsT0FBTyxFQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUN6RyxNQUFNLENBQUMsVUFDUixjQUFvQyxFQUNwQyxpQkFBdUMsRUFDdkMsa0JBQTZDLEVBQzdDLDBCQUErQjtRQUUvQiwwQkFBMEIsQ0FBQyxTQUFTLENBQUM7WUFDbkMsR0FBRyxFQUFFLHlDQUF5QztTQUMvQyxDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYztZQUM5QyxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNuQixHQUFHLEVBQUUsV0FBVztZQUNoQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQjtZQUNsRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUN0QixHQUFHLEVBQUUsY0FBYztZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLHFCQUFxQjtZQUNyRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNsQixHQUFHLEVBQUUsVUFBVTtZQUNmLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCO1lBQ2pELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLEVBdENTLE9BQU8sS0FBUCxPQUFPLFFBc0NoQiJ9