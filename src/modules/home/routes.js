/* @ngInject */
const routes = $stateProvider => (
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./Home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      resolve: {
        tasks(HomeService) {
          return HomeService.getTasks()
            .then(data => data.data.data)
            .catch(err => err);
        },
      },
    })
);

export default ['$stateProvider', routes];
