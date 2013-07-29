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
      
      $routeProvider.when("/hello",
          {
            templateUrl: 'partials/hello.html',
            controller:  'HelloCtrl'
          }
      );
      
      $routeProvider.when("/first",
          {
            templateUrl: 'partials/first.html',
            controller:  'FirstCtrl'
          }
      );

      $routeProvider.when("/courseseries",
          {
            templateUrl: 'partials/CourseSeries.html',
            controller:  'CourseSeriesCtrl'
          }
      );
      
      $routeProvider.when("/grid",
          {
            templateUrl: 'partials/grid.html',
            controller:  'GridCtrl'
          }
      );

    }]);

angular.module('bigu.services', ['ngResource']);
angular.module('bigu.controllers', ['bigu.services']);