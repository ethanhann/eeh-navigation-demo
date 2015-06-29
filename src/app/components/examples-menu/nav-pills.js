'use strict';

angular.module('demo').directive('navPills', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.find('nav > ul').addClass('nav nav-pills nav-stacked');
        }
    };
});
