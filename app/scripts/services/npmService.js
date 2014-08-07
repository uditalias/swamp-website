'use strict';
angular.module('swamp.services').service('npmService', ['$http', '$q', function($http, $q) {

    this.getLastVersionPackage = function(project) {

        var deferred = $q.defer();

        $http.jsonp('http://registry.npmjs.org/' + project + '/?jsonp=JSON_CALLBACK')
            .then(_onNpmPackageSuccess.bind(this, deferred))
            .catch(_onNpmPackageFail.bind(this, deferred));

        return deferred.promise;

    };

    function _onNpmPackageSuccess(deferred, data) {

        data = data.data;
        var latestVersion = data['dist-tags'].latest;
        var packageJson = data['versions'][latestVersion];

        deferred.resolve(packageJson);

    }

    function _onNpmPackageFail(deferred, err) {

        deferred.reject(err);

    }

}]);