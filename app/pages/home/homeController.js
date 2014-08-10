'use strict';

angular.module('swamp.controllers').controller('homeController', [
    '$scope', '$location', '$anchorScroll', 'npmService',
    function($scope, $location, $anchorScroll, npmService) {

        $scope.package = null;

        npmService.getLastVersionPackage('swamp')
            .then(_onLastVersionReceive);

        function _onLastVersionReceive(packageJson) {

            $scope.package = packageJson;

        }

        $scope.goToAnchor = function(anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }


    }]);