/* eslint-disable */
import home from './index';

describe('Home', () => {
  describe('HomeController', () => {
    let controller;
    beforeEach(() => {
      angular.mock.module(home);
      angular.mock.inject(($controller) => {
        controller = $controller('HomeController', {})
      })
    })

    it('should be tested', () => {
      expect(controller.title).to.equal('Angular Todo');
    });
  });
});

