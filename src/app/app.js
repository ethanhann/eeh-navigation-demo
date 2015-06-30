'use strict';

angular.module('demo', [
    'eehMetisMenu',
    'eehNavigation',
    'eehSlideout',
    'eehSuperfish',
    'hljs',
    'ngSanitize',
    'ui.bootstrap',
    'ui.router'
]).config(function ($stateProvider, $translateProvider, $urlRouterProvider, eehNavigationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('demo', {
            abstract: true,
            templateUrl: 'app/app.html'
        })
        .state('demo.layout', {
            abstract: true,
            templateUrl: 'app/layout/layout.html'
        })
        .state('demo.layout.main', {
            url: '/',
            controller: 'MainController',
            templateUrl: 'app/main/main.html'
        })
        .state('demo.layout.navigationMenu', {
            url: '/navigation-menu',
            templateUrl: 'app/navigation-menu/navigation-menu.html'
        })
        .state('demo.layout.navigationMenuSuperfish', {
            url: '/navigation-menu-with-superfish',
            templateUrl: 'app/navigation-menu/superfish.html'
        })
        .state('demo.layout.navigationMenuMetisMenu', {
            url: '/navigation-menu-with-metis-menu',
            templateUrl: 'app/navigation-menu/metis-menu.html'
        })
        .state('demo.layout.navigationMenuSlideout', {
            url: '/navigation-menu-with-slideout',
            templateUrl: 'app/navigation-menu/slideout.html'
        })
        .state('demo.layout.navigationMenuNavbar', {
            url: '/navigation-menu-with-navbar',
            templateUrl: 'app/navigation-menu/navbar.html'
        })
        .state('demo.navigation', {
            abstract: true,
            controller: 'NavigationController',
            templateUrl: 'app/navigation/navigation.html'
        })
        .state('demo.navigation.home', {
            url: '/navbar-sidebar',
            templateUrl: 'app/partials/home.html'
        })
        .state('demo.navigation.blank', {
            url: '/blank',
            templateUrl: 'app/partials/blank.html'
        })
        .state('demo.navigation.alpha', {
            url: '/alpha',
            templateUrl: 'app/partials/alpha.html'
        })
        .state('demo.navigation.beta', {
            url: '/beta',
            templateUrl: 'app/partials/beta.html'
        })
        .state('demo.navigation.knight', {
            url: '/knight',
            templateUrl: 'app/partials/knight.html'
        })
        .state('demo.navigation.bishop', {
            url: '/bishop',
            templateUrl: 'app/partials/bishop.html'
        })
        .state('demo.navigation.search', {
            url: '/search?query',
            controller: 'SearchCtrl',
            templateUrl: 'app/search/search.html'
        });

    eehNavigationProvider.iconBaseClass('glyphicon');

    eehNavigationProvider
        .menuItem('menuOne.home', {
            text: 'Home',
            iconClass: 'glyphicon-home',
            state: 'demo.navigation.home',
            weight: -10
        })
        .menuItem('menuOne.examples', {
            text: 'Other Examples',
            iconClass: 'glyphicon-list',
            state: 'demo.layout.main',
            weight: -9
        })
        .menuItem('menuOne.hiddenChildren', {
            text: 'Hidden Children'
        })
        .menuItem('menuOne.hiddenChildren.hiddenChildren', {
            text: 'Hidden Child',
            visible: false
        })
        .menuItem('menuOne.hiddenChildren.anotherHiddenChildren', {
            text: 'Another Hidden Child',
            visible: false
        })
        .menuItem('menuOne.user', {
            text: 'me',
            iconClass: 'glyphicon-user'
        })
        .menuItem('menuOne.user.blank', {
            text: 'Blank',
            iconClass: 'glyphicon-star',
            state: 'demo.navigation.blank'
        })
        .menuItem('menuOne.user.example-com', {
            text: 'example.com',
            iconClass: 'glyphicon-link',
            href: 'http://example.com',
            target: '_blank'
        })
        .menuItem('menuOne.user.divider1', {
            isDivider: true
        })
        .menuItem('menuOne.user.visible', {
            text: 'Visible',
            iconClass: 'glyphicon-eye-open',
            href: 'http://example.com',
            isVisible: true
        })
        .menuItem('menuOne.user.hidden', {
            text: 'Hidden',
            iconClass: 'glyphicon-eye-slash',
            href: 'http://example.com',
            isVisible: false
        });

    var setLanguage = function (languageKey, languageName) {
        eehNavigationProvider.menuItem('menuOne.language').text = languageName;
        $translateProvider.use(languageKey);
    };

    eehNavigationProvider
        .menuItem('menuOne.language', {
            text: 'English',
            iconClass: 'glyphicon-globe',
            weight: 0
        })
        .menuItem('menuOne.language.en', {
            text: 'English',
            click: function () {
                setLanguage('en', this.text);
            },
            weight: 1
        })
        .menuItem('menuOne.language.de', {
            text: 'Deutsch',
            click: function () {
                setLanguage('de', this.text);
            },
            weight: 0
        });

    eehNavigationProvider
        .menuItem('menuTwo.home', {
            text: 'Home',
            iconClass: 'glyphicon-home',
            state: 'demo.navigation.home',
            weight: 0
        })
        .menuItem('menuTwo.blank', {
            text: 'Blank',
            iconClass: 'glyphicon-star',
            state: 'demo.navigation.blank'
        })
        .menuItem('menuTwo.click', {
            text: 'Click',
            iconClass: 'glyphicon-asterisk'
        })
        .menuItem('menuTwo.external', {
            text: 'Link to example.com',
            iconClass: 'glyphicon-link',
            href: 'http://example.com',
            target: '_blank'
        })
        .menuItem('menuTwo.visible', {
            text: 'Visible',
            iconClass: 'glyphicon-eye-open',
            href: 'http://example.com',
            isVisible: true
        })
        .menuItem('menuTwo.hidden', {
            text: 'Hidden',
            iconClass: 'glyphicon-eye-closed',
            href: 'http://example.com',
            isVisible: false
        })
        .menuItem('menuTwo.multilevel', {
            text: 'Multi level',
            iconClass: 'glyphicon-folder-close',
            isCollapsed: true
        })
        .menuItem('menuTwo.multilevel.firstlevel1', {
            text: 'First level - 1',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.blank'
        })
        .menuItem('menuTwo.multilevel.firstlevel2', {
            text: 'First level - 2',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.blank'
        })
        .menuItem('menuTwo.multilevel.firstlevel3', {
            text: 'First level - 3',
            iconClass: 'glyphicon-folder-close',
            isCollapsed: false
        })
        .menuItem('menuTwo.multilevel.firstlevel3.secondlevel1', {
            text: 'Second level - 1: Alpha',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.alpha'
        })
        .menuItem('menuTwo.multilevel.firstlevel3.secondlevel2', {
            text: 'Second level - 2',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.blank'
        })
        .menuItem('menuTwo.multilevel.firstlevel4', {
            text: 'First level - 4',
            iconClass: 'glyphicon-folder-close',
            isCollapsed: false
        })
        .menuItem('menuTwo.multilevel.firstlevel4.secondlevel1', {
            text: 'Second level - 1: Beta',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.beta'
        })
        .menuItem('menuTwo.multilevel.firstlevel4.secondlevel2', {
            text: 'Second level - 2',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.blank'
        })
        .menuItem('menuTwo.multilevel.firstlevel5', {
            text: 'First level - 5: Home',
            iconClass: 'glyphicon-file',
            state: 'demo.navigation.home'
        })
        .menuItem('menuTwo.chess', {
            text: 'Chess',
            iconClass: 'glyphicon-king',
            isCollapsed: true
        })
        .menuItem('menuTwo.chess.knight', {
            text: 'Knight',
            iconClass: 'glyphicon-knight',
            state: 'demo.navigation.knight'
        })
        .menuItem('menuTwo.chess.bishop', {
            text: 'Bishop',
            iconClass: 'glyphicon-bishop',
            state: 'demo.navigation.bishop'
        });

    eehNavigationProvider
        .menuItem('menuThree.examples', {
            text: 'All Examples',
            state: 'demo.layout.main'
        })
        .menuItem('menuThree.navigationMenu', {
            text: 'Framework-Agnostic Menu',
            state: 'demo.layout.navigationMenu'
        })
        .menuItem('menuThree.navigationMenuSuperfish', {
            text: 'Superfish Menu',
            state: 'demo.layout.navigationMenuSuperfish'
        })
        .menuItem('menuThree.navigationMenuMetisMenu', {
            text: 'metisMenu Menu',
            state: 'demo.layout.navigationMenuMetisMenu'
        })
        .menuItem('menuThree.navigationMenuSlideout', {
            text: 'Slideout.js Menu',
            state: 'demo.layout.navigationMenuSlideout'
        })
        .menuItem('menuThree.navigationMenuNavbar', {
            text: 'Bootstrap Navbar and metisMenu',
            state: 'demo.layout.navigationMenuNavbar'
        })
        .menuItem('menuThree.adminDashboard', {
            text: 'Bootstrap Navbar and Sidebar',
            state: 'demo.navigation.home'
        });

    $translateProvider
        .useSanitizeValueStrategy('escaped')
        .translations('en', {
            'All Examples': 'All Examples',
            'Other Examples': 'Other Examples',
            'Blank': 'Blank',
            'Home': 'Home',
            'Click': 'Click',
            'Link to example.com': 'Link to example.com',
            'Visible': 'Visible',
            'Multi level': 'Multi level',
            'First level - 1': 'First level - 1',
            'First level - 2': 'First level - 2',
            'First level - 3': 'First level - 3',
            'Second level - 1': 'Second level - 1',
            'Second level - 2': 'Second level - 2',
            'First level - 4': 'First level - 4',
            'First level - 5': 'First level - 5',
            'User Profile': 'User Profile',
            'Logout': 'Logout',
            'Chess': 'Chess',
            'Bishop': 'Bishop',
            'Knight': 'Knight'
        })
        .translations('de', {
            'All Examples': 'Alle Beispiele',
            'Other Examples': 'Andere Beispiele',
            'Blank': 'Leer',
            'Home': 'Zuhause',
            'Click': 'Klicken',
            'Link to example.com': 'Link zu example.com',
            'Visible': 'Sichtbar',
            'Multi level': 'Mehrere Ebenen',
            'First level - 1': 'Erste Ebene - 1',
            'First level - 2': 'Erste Ebene - 2',
            'First level - 3': 'Erste Ebene - 3',
            'Second level - 1': 'Zweite Ebene - 1',
            'Second level - 2': 'Zweite Ebene - 2',
            'Erste Ebene - 4': 'Erste Ebene - 4',
            'Erste Ebene - 5': 'Erste Ebene - 5',
            'User Profile': 'Benutzerprofil',
            'Logout': 'Abmelden',
            'Chess': 'Schach',
            'Bishop': 'Bischof',
            'Knight': 'Ritter'
        });
    $translateProvider.preferredLanguage('en');
});

