class HomeService {
  constructor($http) {
    this.$http = $http;
  }

  getTasks() {
    return this.$http.get('/api/tasks');
  }

  postTask(task) {
    return this.$http({
      method: 'POST',
      url: '/api/tasks',
      data: task,
    });
  }

  deleteTask(id) {
    console.log(id);
  }
}

HomeService.$inject = ['$http'];

export default HomeService;
