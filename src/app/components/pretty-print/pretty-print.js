angular.module('demo').directive('pre', function ($window) {
    return {
        restrict: 'E',
        link: function postLink(scope, element) {
            scope.$on('$viewContentLoaded', function () {
                element.addClass('prettyprint');
                element.html($window.prettyPrint(element.html(), '', true));
            });
        }
    };
});
