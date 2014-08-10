'use strict';

app.config([
    '$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('changelog', {
            url: '/changelog/',
            templateUrl: 'pages/changelog/changelog.html',
            controller: 'changelogController'
        });

    }]);