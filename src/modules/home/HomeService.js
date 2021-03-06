class HomeService {
  constructor($http) {
    this.$http = $http;
  }

  getTasks() {
    return this.$http.get('/api/tasks');
  }

  postTask(task) {
    return this.$http(
      {
        method: 'POST',
        url: '/api/tasks',
        data: task,
      },
    );
  }

  updateTask(id, task) {
    return this.$http(
      {
        method: 'PUT',
        url: `api/tasks/${id}`,
        data: task,
      },
    );
  }

  deleteTask(id) {
    return this.$http(
      {
        method: 'DELETE',
        url: `/api/tasks/${id}`,
      },
    );
  }
}

HomeService.$inject = ['$http'];

export default HomeService;
