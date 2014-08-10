'use strict';

angular.module('swamp.controllers').controller('changelogController', [
    '$scope', '$location', '$anchorScroll', 'githubService',
    function($scope, $location, $anchorScroll, githubService) {

        $scope.CHANGELOG = '';
        $scope.isLoading = true;

        $scope.goToAnchor = function(anchor) {
            $location.hash(anchor);
            $anchorScroll();
        }

        githubService.getFileContent('uditalias', 'swamp', 'CHANGELOG.md')
            .then(_onGetFileContentSuccess)
            .catch(_onGetFileContentFail);


        function _onGetFileContentSuccess(content) {
            $scope.isLoading = false;
            $scope.CHANGELOG = content;
        }

        function _onGetFileContentFail(err) {
            $scope.isLoading = false;
        }

    }]);