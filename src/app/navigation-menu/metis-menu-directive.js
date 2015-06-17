'use strict';

angular.module('demo').directive('metisMenu', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.addClass('sidebar-nav');
            var menuElement = element.find('> ul');
            //  menuElement.addClass('metismenu');
            //menuElement.addClass('metismenu');

            $timeout(function () {
                //var m = menuElement.metisMenu();
                menuElement.metisMenu();
            });
        }
    };
});
