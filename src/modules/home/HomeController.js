import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($scope, HomeService) {
    this.err = null;
    this.service = HomeService;
    this.tasks = [];

    $scope.$watch('home.title', (prev, curr) => {

    });
    $scope.$watch('home.description', (prev, curr) => {

    });
  }

  $onInit() {
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

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
