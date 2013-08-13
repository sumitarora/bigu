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
      
      
      $routeProvider.when("/categories",
          {
            templateUrl: 'partials/categories.html',
            controller:  'CategoriesCtrl'
          }
      );

      
      $routeProvider.when("/courseSeries",
          {
            templateUrl: 'partials/course-series.html',
            controller:  'CourseSeriesCtrl'
          }
      );
    

       $routeProvider.when("/new",
          {
            templateUrl: 'partials/hello.html',
            controller:  'HelloCtrl'
          }
      ); 

       $routeProvider.when("/newFile",
          {
            templateUrl: 'partials/user.html',
            controller:  'UserCtrl'
          }
      );     

        $routeProvider.when("/videos",
          {
            templateUrl: 'partials/videos.html',
            controller:  'VideosCtrl'
          }
      ); 

        $routeProvider.when("/about",
          {
            templateUrl: 'partials/about.html',
            controller:  'AboutCtrl'
          }
      ); 

    }]);

angular.module('bigu.services', ['ngResource']);
angular.module('bigu.controllers', ['bigu.services']);
