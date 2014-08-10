'use strict';

angular.module('swamp.controllers').controller('cliController', [
    '$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {


        $scope.goToAnchor = function(anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }


    }]);