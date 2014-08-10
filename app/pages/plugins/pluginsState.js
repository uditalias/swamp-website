'use strict';

app.config([
    '$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('plugins', {
            url: '/plugins/',
            templateUrl: 'pages/plugins/plugins.html',
            controller: 'pluginsController'
        });

    }]);