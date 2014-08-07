'use strict';

angular.module('swamp.directives').directive('swFullScreen', ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<div ng-transclude></div>',
        link: function($scope, $element, $attrs) {

            var minHeight = !isNaN($attrs.minHeight) ? $attrs.minHeight : false;

            function _resize() {

                var w = $(window).outerWidth(true);
                var h = $(window).outerHeight(true);

                if(h < minHeight) {
                    h = minHeight;
                }

                $element.css({
                    'width' : w,
                    'height': h
                });

            }

            $(window).on('resize', _resize);

            $timeout(_resize, 10);

            $scope.$on('$destroy', function() {

                $(window).off('resize', _resize);

            });

        }
    }
}]);