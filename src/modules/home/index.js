import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import HomeController from './HomeController';
import HomeService from './HomeService';
import Tasks from './TasksDirective';

/* @ngInject */
export default angular.module('home', [uirouter])
  .config(routes)
  .service('HomeService', HomeService)
  .controller('HomeController', HomeController)
  .directive('tasks', () => new Tasks())
  .name;
