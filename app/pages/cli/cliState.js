'use strict';

app.config([
    '$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('cli', {
            url: '/cli/',
            templateUrl: 'pages/cli/cli.html',
            controller: 'cliController'
        });

    }]);