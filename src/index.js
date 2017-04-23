import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

/* @ngInject */
angular.module('app', [uirouter])
  .config(routing)
  .run();
