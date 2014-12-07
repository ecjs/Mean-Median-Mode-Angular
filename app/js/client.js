require('angular/angular');

var mmmApp = angular.module('mmmApp', []);
//controllers
require('./controllers/mmm_controller')(mmmApp);
//services
require('./services/mmm_service')(mmmApp);
