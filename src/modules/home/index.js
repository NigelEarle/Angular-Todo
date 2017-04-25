import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import HomeController from './HomeController';
import HomeService from './HomeService';

export default angular.module('home', [uirouter])
  .config(routes)
  .service('HomeService', HomeService)
  .controller('HomeController', HomeController)
  .name;
