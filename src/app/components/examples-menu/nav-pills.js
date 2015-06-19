'use strict';

angular.module('demo').directive('navPills', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.find('> ul').addClass('nav nav-pills');
        }
    };
});
