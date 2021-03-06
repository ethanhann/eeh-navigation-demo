angular.module('demo')
.controller('NavigationController', function ($scope, $state, $window, eehNavigation) {
    'use strict';
    eehNavigation.menuItem('menuOne.user').text = 'Ethan';

    eehNavigation.menuItem('menuOne.user.logout', {
        text: 'Logout',
        iconClass: 'glyphicon-log-out',
        click: function () {
            $window.alert('Faux logout');
        }
    });

    eehNavigation.menuItem('menuTwo.click').click = function () {
        $window.alert('Tada');
    };

    $scope.searchSubmit = function (query) {
        $state.go('demo.navigation.search', { query: query });
    };

    $scope.navbarBrand = {
        src: 'app/navigation/logo-alt.png',
        text: 'eeh-navigation Demo',
        state: 'demo.layout.main'
    };

    eehNavigation.menuItem('menuTwo.createdInController', {
        text: 'Created in Controller',
        href: '/',
        iconClass: 'glyphicon-star'
    });

    eehNavigation.menuItem('menuTwo.createdInController').isVisible = false;
});
