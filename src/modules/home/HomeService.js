
class HomeService {
  constructor($http) {
    this.$http = $http;
  }

  getTasks() {
    return this.$http.get('/api/tasks');
  }
}

HomeService.$inject = ['$http'];

export default HomeService;
