var atl;
(function (atl) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var addController = (function () {
            function addController() {
            }
            return addController;
        }());
        Controllers.addController = addController;
        angular.module('atl').controller('HomeController', HomeController);
    })(Controllers = atl.Controllers || (atl.Controllers = {}));
})(atl || (atl = {}));
