module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.hiddenMMM = true;
    $scope.sendMMM = function(nums) {
      var numsArray = $scope.mmm.numbers.split(' ').sort(function(a, b) {return a - b;}).map(Number);
      console.log('numsArray before its sent to api: ' + numsArray);
      $http({
        method: 'POST',
        url: '/mmm',
        data: numsArray
      })
      .success(function(data) {
        $scope.mmm.mean = data.mean;
        $scope.mmm.median = data.median;
        $scope.mmm.mode = data.mode;
        $scope.hiddenMMM = false;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
