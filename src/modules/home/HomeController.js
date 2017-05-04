import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($scope, HomeService) {
    this.err = null;
    this.service = HomeService;
    this.tasks = [];
    this.task = {
      title: '',
      description: '',
    };

    $scope.$watch('home.title', (prev, curr) => {
      this.task.title = curr;
    });
    $scope.$watch('home.description', (prev, curr) => {
      this.task.description = curr;
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

  addTodo() {
    this.service.postTask(this.task)
    .then((task) => {
      const { data } = task.data;
      this.task.push(data);
    })
    .catch((err) => {
      this.err = err;
    });
  }

  deleteTask(id) {
    this.service.deleteTask(id)
    .then((data) => {
      // handle success - remove from display
    })
    .catch((err) => {
      // display error if
    });
  }
}

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
