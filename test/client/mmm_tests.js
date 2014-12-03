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
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('make a call to mmm', function() {
      $httpBackend.expectPOST('/mmm').respond(200, {mean: 6, median: 6.5, mode: '5'});

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.numbers = '5 5 6 8';
      $scope.sendMMM();
      $httpBackend.flush();

      expect($scope.mmm.mean).toBeDefined();
      expect($scope.mmm.median).toBeDefined();
      expect($scope.mmm.mode).toBeDefined();
      expect($scope.mmm.mean).toBe(6);
      expect($scope.mmm.median).toBe(6.5);
      expect($scope.mmm.mode).toBe('5');
      expect($scope.hiddenMMM).toBe(false);
    });
  });
});
