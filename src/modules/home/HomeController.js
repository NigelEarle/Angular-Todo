import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($scope, HomeService) {
    this.err = null;
    this.service = HomeService;
    this.tasks = [];
    this.task = {};
    this.scope = $scope;
    this.isInput = false;
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

  inputChange(title = '') {
    this.task.title = title;
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

  changeIsInput() {
    this.isInput = !this.isInput;
  }

  updateTask(event, taskId) {
    const { value } = event.target;
    this.inputChange(value);

    this.service
    .updateTask(taskId, this.task)
    .then((data) => {
      this.changeIsInput();
      this.getAllTasks();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteTask(id) {
    this.service.deleteTask(id)
    .then(() => {
      this.getAllTasks();
    })
    .catch((err) => {
      this.err = err;
    });
  }
}

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
