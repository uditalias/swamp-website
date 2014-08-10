'use strict';

angular.module('swamp.controllers').controller('mainController', ['$scope', '$rootScope', '$location', '$anchorScroll', '$state',
    function($scope, $rootScope, $location, $anchorScroll, $state) {

        $scope.pageScrolled = false;

        $scope.onScroll = function(state) {

            $scope.pageScrolled = state;

        }

        $scope.scrollTop = function() {
            $(document.body).animate({'scrollTop': 0}, 200);
        }

        $scope.goToAnchor = function(anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }

        $scope.stateTab = function(stateName) {
            return stateName == $state.current.name;
        }

    }]);