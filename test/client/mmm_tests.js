require('../../app/js/client');
require('angular-mocks');

describe('mmmController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('rest request', function() {

    it('make a call to mmm', function() {

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.numbers = '5 5 6 8';
      $scope.sendMMM();

      expect($scope.mmm.mean).toBeDefined();
      expect($scope.mmm.median).toBeDefined();
      expect($scope.mmm.mode).toBeDefined();
      expect($scope.mmm.mean).toBe(6);
      expect($scope.mmm.median).toBe(5.5);
      expect($scope.mmm.mode).toBe('5');
      expect($scope.hiddenMMM).toBe(false);
    });
  });
});
