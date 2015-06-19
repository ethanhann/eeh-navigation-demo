angular.module('demo')
    .controller('MainController', function ($scope) {
        'use strict';
        $scope.exampleSets = [
            [{
                image: 'navbar-sidebar.png',
                state: 'demo.navigation.home',
                title: 'Bootstrap Navbar and Sidebar',
                description: 'Use <strong>eeh-navigation-navbar</strong> and <strong>eeh-navigation-sidebar</strong> to build an admin dashboard.'
            },
                {
                    image: 'eeh-navigation-menu.png',
                    state: 'demo.navigationMenu',
                    title: 'Framework-Agnostic Menu',
                    description: 'Use <strong>eeh-navigation-menu</strong> to build a custom menu.'
                },
                {
                    image: 'superfish.png',
                    state: 'demo.navigationMenuSuperfish',
                    title: 'Superfish Menu',
                    description: 'Use <strong>eeh-navigation-menu</strong> with <a href="https://github.com/joeldbirch/superfish">Superfish</a>.'
                }],
            [{
                image: 'metis-menu.png',
                state: 'demo.navigationMenuMetisMenu',
                title: 'metisMenu Menu',
                description: 'Use <strong>eeh-navigation-menu</strong> with <a href="https://github.com/onokumus/metisMenu">metisMenu</a>.'
            }]
        ];
    });
