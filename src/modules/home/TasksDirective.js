/* @ngInject */
class Tasks {
  constructor() {
    this.template = require('./list.html');
    this.restrict = 'E';
    this.scope = {
      data: '=',
    };
    this.transclude = true;
  }

  controller($scope) {
  }
}

export default Tasks;
