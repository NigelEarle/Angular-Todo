import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($location, HomeService) {
    this.$location = $location;
    this.err = null;
    this.service = HomeService;
    this.title = 'Angular Todo';
  }

  attach() {

  }
}

HomeController.$inject = ['$location', 'HomeService'];

export default HomeController;
