'use strict';

/* Filters */
angular.module('bigu.filters', []).filter('interpolate', ['version', function (version) {
  return function (text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}])

  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  })

  .filter('ashafilter', function() {
    return function(input) {
      input = input + "asha";
      return input;
    };
  })



  .filter('rfilter', function() {
    return function(input) {
      if(input === "rubyverma@yahoo.com"){
          input = "shonisnakhigandiwali";
      }
      return input;
    };
  })

  .filter('reverse', function() {
    return function(text) {
      return text.split(" ").reverse().join(" ");
    };
  })




;


