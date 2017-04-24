/* ngInject */

export default $stateProvider => (
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./Home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
    })
);
