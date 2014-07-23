'use strict';

angular.module('swamp.controllers').controller('mainController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

        $scope.pageScrolled = false;

        $scope.onScroll = function(state) {

            $scope.pageScrolled = state;

        }

    }]);