'use strict';

angular.module('swamp.services').service('githubService', ['$q', '$http', function($q, $http) {

    var cache = {};

    this.getFileMetaData = function(user, repo, path) {

        var deferred = $q.defer();

        if(cache[path]) {
            deferred.resolve(cache[path]);
        } else {
            $http.jsonp('https://api.github.com/repos/{0}/{1}/contents/{2}?callback=JSON_CALLBACK'.format(user, repo, path))
                .then(function(response) {

                    cache[path] = response.data.data;

                    deferred.resolve(response.data.data);
                })
                .catch(function(err) {
                    deferred.reject(err);
                });
        }

        return deferred.promise;

    };

    this.getFileContent = function(user, repo, path) {
        var deferred = $q.defer();

        this.getFileMetaData(user, repo, path)
            .then(function(response) {
                if(response.content) {
                    deferred.resolve(atob(response.content));
                } else {
                    deferred.resolve('');
                }
            })
            .catch(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

}]);