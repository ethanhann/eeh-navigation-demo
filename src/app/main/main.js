angular.module('demo')
    .controller('MainController', function ($scope) {
        'use strict';
        $scope.exampleSets = [[
            {
                image: 'navbar-sidebar.png',
                state: 'demo.navigation.home',
                title: 'Bootstrap Navbar and Sidebar',
                description: 'Use <strong>eeh-navigation-navbar</strong> and <strong>eeh-navigation-sidebar</strong> to build an admin dashboard.'
            },
            {
                image: 'eeh-navigation-menu.png',
                state: 'demo.layout.navigationMenu',
                title: 'Framework-Agnostic Menu',
                description: 'Use <strong>eeh-navigation-menu</strong> to build a custom menu.'
            },
            {
                image: 'superfish.png',
                state: 'demo.layout.navigationMenuSuperfish',
                title: 'Superfish Menu',
                description: 'Use <strong>eeh-navigation-menu</strong> with <a href="https://github.com/joeldbirch/superfish">Superfish</a>.'
            }], [
            {
                image: 'metis-menu.png',
                state: 'demo.layout.navigationMenuMetisMenu',
                title: 'metisMenu Menu',
                description: 'Use <strong>eeh-navigation-menu</strong> with <a href="https://github.com/onokumus/metisMenu">metisMenu</a>.'
            },
            {
                image: 'slideout.png',
                state: 'demo.layout.navigationMenuSlideout',
                title: 'metisMenu Menu',
                description: 'Use <strong>eeh-navigation-menu</strong> with <a href="https://mango.github.io/slideout">Slideout.js</a>.'
            },
            {
                image: 'navbar-and-metis-menu.png',
                state: 'demo.layout.navigationMenuNavbar',
                title: 'Bootstrap Navbar with Metis Menu',
                description: 'Use <strong>eeh-navigation-navbar</strong> with <a href="https://github.com/onokumus/metisMenu">metisMenu</a>.'
            }
        ]];
    });
