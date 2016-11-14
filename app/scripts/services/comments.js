'use strict';

/**
 * @ngdoc service
 * @name pandaApp.comments
 * @description
 * # comments
 * Service in the pandaApp.
 */
angular.module('pandaApp')
  .service('comments', function () {
    var comments = [];

    this.getComments = function() {
      return comments;
    };

    this.addComment = function(email, message) {
      var comment = {
        email: email,
        message: message
      };

      comments.push(comment);
    };

  });
