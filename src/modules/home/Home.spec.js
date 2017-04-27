/* eslint-disable */
import home from './index';

describe('Home', () => {
  let $controller;
  let homeService;
  beforeEach(() => {
    angular.mock.module(home);
    angular.mock.inject(function (_$controller_, HomeService) {
      $controller = _$controller_;
      homeService = HomeService;
    })
  })
  it('should be tested', () => {
    let controller;
    expect(homeService.getTasks()).to.be.a('object');
    controller = $controller('HomeController')
    expect(controller.title).to.equal('Angular Todo');
  });
});

