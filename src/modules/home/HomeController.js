import './Home.scss';
/* @ngInject */
class HomeController {
  constructor(HomeService) {
    this.err = null;
    this.service = HomeService;
    this.tasks = [];

    this.service.getTasks()
    .then((tasks) => {
      const { data } = tasks.data;
      this.tasks = data;
    })
    .catch((error) => {
      this.err = error;
    });
  }
}

HomeController.$inject = ['HomeService'];

export default HomeController;
