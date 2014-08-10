'use strict';

angular.module('swamp.controllers').controller('pluginsController', [
    '$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {


        $scope.goToAnchor = function(anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }


    }]);