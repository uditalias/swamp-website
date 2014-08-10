'use strict';

angular.module('swamp.directives').directive('swSideMenu', [
    '$http', '$compile', '$templateCache', '$rootScope',
    function($http, $compile, $templateCache, $rootScope) {
        return {
            restrict: 'A',
            link: function($scope, $element, $attrs) {

                var stateChangeListener = null;
                var $menu = $('<div class="sw-side-menu"></div>');
                var isOpen = false;

                function _close() {
                    isOpen = false;
                    $menu.css({ 'right': '-260px' });
                    $(document.body).removeClass('sw-side-menu-open');
                }

                function _open() {
                    isOpen = true;
                    $menu.css({ 'right': 0 });
                    $(document.body).addClass('sw-side-menu-open');
                }

                function _onElementClick() {

                    isOpen ? _close() : _open();

                }

                $scope.$on('$destroy', function() {

                    _close();

                    $(window).off('resize', _close);

                    stateChangeListener && stateChangeListener();

                });

                $element.on('click', _onElementClick);

                $(window).on('resize', _close);

                stateChangeListener = $rootScope.$on('$stateChangeSuccess', _close);

                $http.get($attrs.swSideMenuTemplateUrl, { cache: $templateCache }).then(function(result) {

                    $compile(result.data)($scope, function (clonedElement, scope) {

                        clonedElement.appendTo($menu);

                        $menu.appendTo(document.body);

                    });
                });
            }
        }
    }]);