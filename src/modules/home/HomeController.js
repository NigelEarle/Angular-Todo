import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($location, HomeService) {
    this.$location = $location;
    this.HomeService = HomeService;
    this.err = null;
    this.tasks = [];
    this.title = 'Angular Todo';

    this.HomeService.getTasks()
      .then((data) => {
        this.tasks = data.data.data;
      })
      .catch((err) => {
        this.err = err;
      });
  }


  /* extract to func */
  // renderTasks() {
  //   return this.HomeService.getTasks()
  //   .then((data) => {
  //     this.tasks = data;
  //   })
  //   .catch((err) => {
  //     this.err = err;
  //   });
  // }
}

HomeController.$inject = ['$location', 'HomeService'];

export default HomeController;
