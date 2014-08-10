'use strict';

app.config([
    '$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('docs', {
            url: '/docs/',
            templateUrl: 'pages/docs/docs.html',
            controller: 'docsController'
        });

    }]);