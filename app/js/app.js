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
      
<<<<<<< HEAD
      $routeProvider.when("/Detail",
          {
            templateUrl: 'partials/Detail.html',
            controller:  'DetailCtrl'
          }
      );

       $routeProvider.when("/SecondForm",
          {
            templateUrl: 'partials/second.html',
            controller:  'SecondCtrl'
          }
      );


=======
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
>>>>>>> 861690bcafdc44d1721cd6cb4e6d2c4951a7bdb6

    }]);

angular.module('bigu.services', ['ngResource']);
angular.module('bigu.controllers', ['bigu.services']);