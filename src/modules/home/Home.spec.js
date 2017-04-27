/* eslint-disable */
import home from './index';

describe('Home', () => {
  let $controller;
  beforeEach(() => {
    angular.mock.module(home);
    angular.mock.inject(function (_$controller_) {
      $controller = _$controller_;
    })
  })

  it('should be tested', () => {
    let controller;
    controller = $controller('HomeController')
    expect(controller.title).to.equal('Angular Todo');
  });
});

