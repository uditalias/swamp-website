'use strict';

angular.module('swamp.controllers').controller('homeController', ['$scope', 'npmService', function($scope, npmService) {

    $scope.package = null;

    npmService.getLastVersionPackage('swamp')
        .then(_onLastVersionReceive);

    function _onLastVersionReceive(packageJson) {

        $scope.package = packageJson;

    }


}]);