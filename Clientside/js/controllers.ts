namespace atl.Controllers {
  export class HomeController {
      // public movies;

    constructor(/*private movieService: atl.Services.MovieService*/) {
      // this.movies = this.movieService.getAll();
    }
  }

  export class addController {
    // public movie;
    constructor(
      // private movieService: atl.Services.MovieService,
      // private $state: ng.ui.IStateService
    ) {

    }

    // public save() {
    //   let params = {
    //     title: this.movie.title,
    //     genre: this.movie.genre
    //   }
    //
    //   this.movieService.save(params).then((res) => {
    //     this.$state.go("Home");
    //   })
    // }

  }

  angular.module('atl').controller('HomeController', HomeController);
}
