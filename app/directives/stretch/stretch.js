'use strict';

angular.module('swamp.directives').directive('swStretch', ['$timeout', '$rootScope', function($timeout, $rootScope) {
    return {
        restrict: 'A',
        priority: -1,
        link: function($scope, $element, $attrs) {

            function _resize() {

                var w = $element.parent().outerWidth(true);
                var h = $element.parent().outerHeight(true);

                if(w > h) {

                    $element.css({
                        'width' : '100%',
                        'height': 'auto'
                    });

                    if(h > $element.outerHeight(true)) {

                        $element.css({
                            'width' : 'auto',
                            'height': '100%'
                        });

                    }

                } else {

                    $element.css({
                        'width' : 'auto',
                        'height': '100%'
                    });

                    if(w > $element.outerWidth(true)) {

                        $element.css({
                            'width' : '100%',
                            'height': 'auto'
                        });

                    }

                }

            }

            $element.parent().css('overflow', 'hidden');

            $(window).on('resize', _resize);

            $timeout(_resize, 10);

            $scope.$on('$destroy', function() {

                $(window).off('resize', _resize);

            });

        }
    }
}]);