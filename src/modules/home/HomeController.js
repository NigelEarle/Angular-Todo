import './Home.scss';

class HomeController {
  constructor($location) {
    this.$location = $location;
    this.title = 'Angular Todo';
  }
}

HomeController.$inject = ['$location'];

export default HomeController;
