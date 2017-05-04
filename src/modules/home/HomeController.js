import './Home.scss';
/* @ngInject */
class HomeController {
  constructor($scope, HomeService) {
    this.err = null;
    this.service = HomeService;
    this.tasks = [];
    this.task = {};
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

  inputChange(title = '', description = '') {
    this.task.title = title;
    this.task.description = description;
  }

  addTodo() {
    console.log(this.task);
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
      console.log(data);
      // handle success - remove from display
    })
    .catch((err) => {
      console.log(err)
      // display error if
    });
  }
}

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
