'use strict';
angular.module('swamp.directives').directive('swTerminal', [function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'directives/terminal/terminal.html'
    }
}]);