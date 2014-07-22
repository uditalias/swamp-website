'use strict';

app.config([
    '$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'pages/home/home.html',
            controller: 'homeController'
        });

    }]);