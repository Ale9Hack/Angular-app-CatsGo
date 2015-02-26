'use strict';

/**
 * @ngdoc directive
 * @name catsGoApp.directive:prueba99
 * @description
 * # prueba99
 */
angular.module('catsGoApp')
  .directive('plug', function () {
    return {
      template: 'views/templates/galleryCarousel.html',
      restrict: 'E',
      
      link: function postLink(scope,element,attrs){
		element.text('this is the plug directive');      
      }

    };
  });
