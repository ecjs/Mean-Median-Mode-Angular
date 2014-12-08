module.exports = function(app) {

  app.factory('mmmService', ['$http', function($http) {
    return {
      returnMMM: function(numsArray, scope) {
        console.log('numsArray before its sent to api: ' + numsArray);
        $http({
          method: 'POST',
          url: '/mmm',
          data: numsArray
        })
        .success(function(data) {
          scope.mmm.mean = data.mean;
          scope.mmm.median = data.median;
          scope.mmm.mode = data.mode;
          scope.hiddenMMM = false;
        })
        .error(function(data) {
          console.log(data);
        });
      }
    };
  }]);
};
