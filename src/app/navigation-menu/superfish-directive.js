'use strict';

angular.module('demo').directive('superfish', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var menuElement = element.find('> ul');
            menuElement.addClass('sf-menu');
            scope.$on('$includeContentLoaded', function () {
                menuElement.superfish();
            });
        }
    };
});
