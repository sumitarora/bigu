'use strict';

angular.module('bigu', ['bigu.filters', 'bigu.services', 'bigu.directives', 'bigu.controllers', 'ngCookies', 'ngResource', '$strap.directives'])
      .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $routeProvider.when("/",
          {
            templateUrl: 'partials/sample.html',
            controller:  'SampleCtrl'
          }
      );
      
    }]);

angular.module('bigu.services', ['ngResource']);
angular.module('bigu.controllers', ['bigu.services']);