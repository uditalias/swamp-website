'use strict';

angular.module('swamp.filters').filter('md2html',[function() {
    return function(input) {

        if(input) {
            return markdown.toHTML(input);
        }

    }
}]);