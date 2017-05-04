import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($scope, HomeService) {
    this.err = null;
    this.service = HomeService;
    this.tasks = [];
    this.task = {};
    this.scope = $scope;
  }

  $onInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.service.getTasks()
    .then((tasks) => {
      const { data } = tasks.data;
      this.tasks = data;
    })
    .catch((error) => {
      this.err = error;
    });
  }

  inputChange(title = '', description = '') {
    this.task.title = title;
    this.task.description = description;
  }

  addTodo() {
    this.service.postTask(this.task)
    .then((task) => {
      const { data } = task.data;
      this.tasks.push(data);
    })
    .catch((err) => {
      this.err = err;
    });
  }

  deleteTask(id) {
    this.service.deleteTask(id)
    .then((data) => {
      console.log(data);
      this.getAllTasks();
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
