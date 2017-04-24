import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import HomeController from './HomeController';


export default angular.module('app', [uirouter])
  .config(routes)
  .controller(HomeController)
  .name;
