'use strict';

/**
 * @ngdoc function
 * @name pandaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pandaApp
 */
angular.module('pandaApp')
  .controller('MainCtrl', function ($scope, comments) {

    // initialize comment
    $scope.comment = {};

    // initialize comments list
    $scope.comments = comments.getComments();

    $scope.addComment = function() {
      comments.addComment($scope.comment.email, $scope.comment.message);
      $scope.comment = {}; // reset fields
    };

  });
