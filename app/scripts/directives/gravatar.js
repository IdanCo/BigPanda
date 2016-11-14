'use strict';

/**
 * @ngdoc directive
 * @name pandaApp.directive:gravatar
 * @description
 * # gravatar
 */
angular.module('pandaApp')
  .directive('gravatar', function (md5) {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        email: '@'
      },
      link: function(scope, element, attrs) {
        scope.$watch('email',function(v){
          var hash = md5.createHash(v);
          scope.url = 'https://secure.gravatar.com/avatar/' + hash;
        });
      },
      template: '<img alt="{{ email }}" ng-src="{{ url }}">'
    };
  });
