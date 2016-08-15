var SpotApp;
(function (SpotApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal) {
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.showModal = function () {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: '/templates/dialog.html',
                    controller: 'DialogController',
                    controllerAs: 'vm',
                    resolve: {
                        dataFromHomeController: function () { return _this.email; }
                    },
                    size: 'sm'
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('SpotApp').controller('HomeController', HomeController);
        var MarkPageController = (function () {
            function MarkPageController($geolocation) {
                this.center = { latitude: 37.09024, longitude: -100.712891 };
                this.zoom = 4;
                $geolocation.getCurrentPosition({
                    timeout: 60000
                }).then(function (position) {
                    this.coords = {
                        lat: parseFloat(position.coords.latitude),
                        lng: parseFloat(position.coords.latitude)
                    };
                    console.log(this.coords);
                });
            }
            MarkPageController.prototype.myLocation = function () {
            };
            return MarkPageController;
        }());
        Controllers.MarkPageController = MarkPageController;
        var ExplorePageController = (function () {
            function ExplorePageController() {
            }
            return ExplorePageController;
        }());
        Controllers.ExplorePageController = ExplorePageController;
        var HitPageController = (function () {
            function HitPageController() {
            }
            return HitPageController;
        }());
        Controllers.HitPageController = HitPageController;
    })(Controllers = SpotApp.Controllers || (SpotApp.Controllers = {}));
})(SpotApp || (SpotApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SUEsSUFBVSxPQUFPLENBZ0VoQjtBQWhFRCxXQUFVLE9BQU87SUFBQyxJQUFBLFdBQVcsQ0FnRTVCO0lBaEVpQixXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRTdCO1lBYUUsd0JBQW9CLFNBQTZDO2dCQUE3QyxjQUFTLEdBQVQsU0FBUyxDQUFvQztZQUNqRSxDQUFDO1lBWkQsa0NBQVMsR0FBVDtnQkFBQSxpQkFVQztnQkFUQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDbEIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsVUFBVSxFQUFFLGtCQUFrQjtvQkFDOUIsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLE9BQU8sRUFBRTt3QkFDUCxzQkFBc0IsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVO3FCQUN6QztvQkFDRCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBR0gscUJBQUM7UUFBRCxDQUFDLEFBZkQsSUFlQztRQWZZLDBCQUFjLGlCQWUxQixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFLdkU7WUFXRSw0QkFBWSxZQUFZO2dCQU5qQixXQUFNLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBQyxDQUFDO2dCQUN2RCxTQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQU1kLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUc7d0JBQ1osR0FBRyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDekMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDMUMsQ0FBQTtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUE7WUFFSixDQUFDO1lBcEJNLHVDQUFVLEdBQWpCO1lBQ0EsQ0FBQztZQW9CSCx5QkFBQztRQUFELENBQUMsQUF2QkQsSUF1QkM7UUF2QlksOEJBQWtCLHFCQXVCOUIsQ0FBQTtRQUdEO1lBRUU7WUFFQSxDQUFDO1lBQ0gsNEJBQUM7UUFBRCxDQUFDLEFBTEQsSUFLQztRQUxZLGlDQUFxQix3QkFLakMsQ0FBQTtRQUVEO1lBR0U7WUFFQSxDQUFDO1lBQ0gsd0JBQUM7UUFBRCxDQUFDLEFBTkQsSUFNQztRQU5ZLDZCQUFpQixvQkFNN0IsQ0FBQTtJQUVILENBQUMsRUFoRWlCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBZ0U1QjtBQUFELENBQUMsRUFoRVMsT0FBTyxLQUFQLE9BQU8sUUFnRWhCIn0=