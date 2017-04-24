/* @ngInject */
const config = ($urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
};

export default ['$urlRouterProvider', '$locationProvider', config];
