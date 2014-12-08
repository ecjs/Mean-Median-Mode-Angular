module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', 'mmmService', function($scope, $http, mmmService) {
    $scope.hiddenMMM = true;
    $scope.sendMMM = function() {
      var numsArray = $scope.mmm.numbers.split(' ').sort(function(a, b) {return a - b;}).map(Number);
      mmmService.returnMMM(numsArray, $scope);
    };
  }]);
};
