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
      
      
      $routeProvider.when("/Categories",
          {
            templateUrl: 'partials/categories.html',
            controller:  'CategoriesCtrl'
          }
      );

       $routeProvider.when("/SecondFormClick",
          {
            templateUrl: 'partials/second.html',
            controller:  'SecondFormCtrl'
          }
      );
      
      $routeProvider.when("/CourseSeries",
          {
            templateUrl: 'partials/courseseries.html',
            controller:  'CourseSeriesCtrl'
          }
      );

      

    }]);

angular.module('bigu.services', ['ngResource']);
angular.module('bigu.controllers', ['bigu.services']);
