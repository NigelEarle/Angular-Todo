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

  updateTask() {
    console.log(this.task);
    // this.service
    // .updateTask(task)
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
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
