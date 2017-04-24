/* @ngInject */
const routes = $stateProvider => (
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./Home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
    })
);

export default ['$stateProvider', routes];
