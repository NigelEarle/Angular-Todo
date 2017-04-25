import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($location, tasks) {
    this.$location = $location;
    this.err = null;
    this.tasks = tasks;
    this.title = 'Angular Todo';
  }
}

HomeController.$inject = ['$location', 'tasks'];

export default HomeController;
