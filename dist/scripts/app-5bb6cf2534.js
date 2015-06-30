//angular.module('demo').directive('pre', function ($window) {
//    return {
//        restrict: 'E',
//        link: function postLink(scope, element) {
//            scope.$on('$viewContentLoaded', function () {
//                element.addClass('prettyprint');
//                element.html($window.prettyPrint(element.html(), '', true));
//            });
//        }
//    };
//});
"use strict";angular.module("demo",["eehMetisMenu","eehNavigation","eehSlideout","eehSuperfish","ngSanitize","ui.bootstrap","ui.router"]).config(["$stateProvider","$translateProvider","$urlRouterProvider","eehNavigationProvider",function(e,n,t,a){t.otherwise("/"),e.state("demo",{"abstract":!0,templateUrl:"app/app.html"}).state("demo.layout",{"abstract":!0,templateUrl:"app/layout/layout.html"}).state("demo.layout.main",{url:"/",controller:"MainController",templateUrl:"app/main/main.html"}).state("demo.layout.navigationMenu",{url:"/navigation-menu",templateUrl:"app/navigation-menu/navigation-menu.html"}).state("demo.layout.navigationMenuSuperfish",{url:"/navigation-menu-with-superfish",templateUrl:"app/navigation-menu/superfish.html"}).state("demo.layout.navigationMenuMetisMenu",{url:"/navigation-menu-with-metis-menu",templateUrl:"app/navigation-menu/metis-menu.html"}).state("demo.layout.navigationMenuSlideout",{url:"/navigation-menu-with-slideout",templateUrl:"app/navigation-menu/slideout.html"}).state("demo.layout.navigationMenuNavbar",{url:"/navigation-menu-with-navbar",templateUrl:"app/navigation-menu/navbar.html"}).state("demo.navigation",{"abstract":!0,controller:"NavigationController",templateUrl:"app/navigation/navigation.html"}).state("demo.navigation.home",{url:"/navbar-sidebar",templateUrl:"app/partials/home.html"}).state("demo.navigation.blank",{url:"/blank",templateUrl:"app/partials/blank.html"}).state("demo.navigation.alpha",{url:"/alpha",templateUrl:"app/partials/alpha.html"}).state("demo.navigation.beta",{url:"/beta",templateUrl:"app/partials/beta.html"}).state("demo.navigation.knight",{url:"/knight",templateUrl:"app/partials/knight.html"}).state("demo.navigation.bishop",{url:"/bishop",templateUrl:"app/partials/bishop.html"}).state("demo.navigation.search",{url:"/search?query",controller:"SearchCtrl",templateUrl:"app/search/search.html"}),a.iconBaseClass("glyphicon"),a.menuItem("menuOne.home",{text:"Home",iconClass:"glyphicon-home",state:"demo.navigation.home",weight:-10}).menuItem("menuOne.examples",{text:"Other Examples",iconClass:"glyphicon-list",state:"demo.layout.main",weight:-9}).menuItem("menuOne.hiddenChildren",{text:"Hidden Children"}).menuItem("menuOne.hiddenChildren.hiddenChildren",{text:"Hidden Child",visible:!1}).menuItem("menuOne.hiddenChildren.anotherHiddenChildren",{text:"Another Hidden Child",visible:!1}).menuItem("menuOne.user",{text:"me",iconClass:"glyphicon-user"}).menuItem("menuOne.user.blank",{text:"Blank",iconClass:"glyphicon-star",state:"demo.navigation.blank"}).menuItem("menuOne.user.example-com",{text:"example.com",iconClass:"glyphicon-link",href:"http://example.com",target:"_blank"}).menuItem("menuOne.user.divider1",{isDivider:!0}).menuItem("menuOne.user.visible",{text:"Visible",iconClass:"glyphicon-eye-open",href:"http://example.com",isVisible:!0}).menuItem("menuOne.user.hidden",{text:"Hidden",iconClass:"glyphicon-eye-slash",href:"http://example.com",isVisible:!1});var i=function(e,t){a.menuItem("menuOne.language").text=t,n.use(e)};a.menuItem("menuOne.language",{text:"English",iconClass:"glyphicon-globe",weight:0}).menuItem("menuOne.language.en",{text:"English",click:function(){i("en",this.text)},weight:1}).menuItem("menuOne.language.de",{text:"Deutsch",click:function(){i("de",this.text)},weight:0}),a.menuItem("menuTwo.home",{text:"Home",iconClass:"glyphicon-home",state:"demo.navigation.home",weight:0}).menuItem("menuTwo.blank",{text:"Blank",iconClass:"glyphicon-star",state:"demo.navigation.blank"}).menuItem("menuTwo.click",{text:"Click",iconClass:"glyphicon-asterisk"}).menuItem("menuTwo.external",{text:"Link to example.com",iconClass:"glyphicon-link",href:"http://example.com",target:"_blank"}).menuItem("menuTwo.visible",{text:"Visible",iconClass:"glyphicon-eye-open",href:"http://example.com",isVisible:!0}).menuItem("menuTwo.hidden",{text:"Hidden",iconClass:"glyphicon-eye-closed",href:"http://example.com",isVisible:!1}).menuItem("menuTwo.multilevel",{text:"Multi level",iconClass:"glyphicon-folder-close",isCollapsed:!0}).menuItem("menuTwo.multilevel.firstlevel1",{text:"First level - 1",iconClass:"glyphicon-file",state:"demo.navigation.blank"}).menuItem("menuTwo.multilevel.firstlevel2",{text:"First level - 2",iconClass:"glyphicon-file",state:"demo.navigation.blank"}).menuItem("menuTwo.multilevel.firstlevel3",{text:"First level - 3",iconClass:"glyphicon-folder-close",isCollapsed:!1}).menuItem("menuTwo.multilevel.firstlevel3.secondlevel1",{text:"Second level - 1: Alpha",iconClass:"glyphicon-file",state:"demo.navigation.alpha"}).menuItem("menuTwo.multilevel.firstlevel3.secondlevel2",{text:"Second level - 2",iconClass:"glyphicon-file",state:"demo.navigation.blank"}).menuItem("menuTwo.multilevel.firstlevel4",{text:"First level - 4",iconClass:"glyphicon-folder-close",isCollapsed:!1}).menuItem("menuTwo.multilevel.firstlevel4.secondlevel1",{text:"Second level - 1: Beta",iconClass:"glyphicon-file",state:"demo.navigation.beta"}).menuItem("menuTwo.multilevel.firstlevel4.secondlevel2",{text:"Second level - 2",iconClass:"glyphicon-file",state:"demo.navigation.blank"}).menuItem("menuTwo.multilevel.firstlevel5",{text:"First level - 5: Home",iconClass:"glyphicon-file",state:"demo.navigation.home"}).menuItem("menuTwo.chess",{text:"Chess",iconClass:"glyphicon-king",isCollapsed:!0}).menuItem("menuTwo.chess.knight",{text:"Knight",iconClass:"glyphicon-knight",state:"demo.navigation.knight"}).menuItem("menuTwo.chess.bishop",{text:"Bishop",iconClass:"glyphicon-bishop",state:"demo.navigation.bishop"}),a.menuItem("menuThree.examples",{text:"All Examples",state:"demo.layout.main"}).menuItem("menuThree.navigationMenu",{text:"Framework-Agnostic Menu",state:"demo.layout.navigationMenu"}).menuItem("menuThree.navigationMenuSuperfish",{text:"Superfish Menu",state:"demo.layout.navigationMenuSuperfish"}).menuItem("menuThree.navigationMenuMetisMenu",{text:"metisMenu Menu",state:"demo.layout.navigationMenuMetisMenu"}).menuItem("menuThree.navigationMenuSlideout",{text:"Slideout.js Menu",state:"demo.layout.navigationMenuSlideout"}).menuItem("menuThree.navigationMenuNavbar",{text:"Bootstrap Navbar and metisMenu",state:"demo.layout.navigationMenuNavbar"}).menuItem("menuThree.adminDashboard",{text:"Bootstrap Navbar and Sidebar",state:"demo.navigation.home"}),n.useSanitizeValueStrategy("escaped").translations("en",{Blank:"Blank",Home:"Home",Click:"Click","Link to example.com":"Link to example.com",Visible:"Visible","Multi level":"Multi level","First level - 1":"First level - 1","First level - 2":"First level - 2","First level - 3":"First level - 3","Second level - 1":"Second level - 1","Second level - 2":"Second level - 2","First level - 4":"First level - 4","First level - 5":"First level - 5","User Profile":"User Profile",Logout:"Logout",Chess:"Chess",Bishop:"Bishop",Knight:"Knight"}).translations("de",{Blank:"Leer",Home:"Zuhause",Click:"Klicken","Link to example.com":"Link zu example.com",Visible:"Sichtbar","Multi level":"Mehrere Ebenen","First level - 1":"Erste Ebene - 1","First level - 2":"Erste Ebene - 2","First level - 3":"Erste Ebene - 3","Second level - 1":"Zweite Ebene - 1","Second level - 2":"Zweite Ebene - 2","Erste Ebene - 4":"Erste Ebene - 4","Erste Ebene - 5":"Erste Ebene - 5","User Profile":"Benutzerprofil",Logout:"Abmelden",Chess:"Schach",Bishop:"Bischof",Knight:"Ritter"}),n.preferredLanguage("en")}]),angular.module("demo").directive("navPills",function(){return{restrict:"A",link:function(e,n){n.find("nav > ul").addClass("nav nav-pills nav-stacked")}}}),angular.module("demo").controller("SearchCtrl",["$scope","$stateParams",function(e,n){e.searchTerm=n.query}]),angular.module("demo").controller("NavigationController",["$scope","$state","$window","eehNavigation",function(e,n,t,a){a.menuItem("menuOne.user").text="Ethan",a.menuItem("menuOne.user.logout",{text:"Logout",iconClass:"glyphicon-log-out",click:function(){t.alert("Faux logout")}}),a.menuItem("menuTwo.click").click=function(){t.alert("Tada")},e.searchSubmit=function(e){n.go("demo.navigation.search",{query:e})},e.navbarBrand={text:"eeh-navigation Demo",state:"demo.layout.main"},a.menuItem("menuTwo.createdInController",{text:"Created in Controller",href:"/",iconClass:"glyphicon-star"}),a.menuItem("menuTwo.createdInController").isVisible=!1}]),angular.module("demo").controller("MainController",["$scope",function(e){e.exampleSets=[[{image:"navbar-sidebar.png",state:"demo.navigation.home",title:"Bootstrap Navbar and Sidebar",description:"Use <strong>eeh-navigation-navbar</strong> and <strong>eeh-navigation-sidebar</strong> to build an admin dashboard."},{image:"eeh-navigation-menu.png",state:"demo.layout.navigationMenu",title:"Framework-Agnostic Menu",description:"Use <strong>eeh-navigation-menu</strong> to build a custom menu."},{image:"superfish.png",state:"demo.layout.navigationMenuSuperfish",title:"Superfish Menu",description:'Use <strong>eeh-navigation-menu</strong> with <a href="https://github.com/joeldbirch/superfish">Superfish</a>.'}],[{image:"metis-menu.png",state:"demo.layout.navigationMenuMetisMenu",title:"metisMenu Menu",description:'Use <strong>eeh-navigation-menu</strong> with <a href="https://github.com/onokumus/metisMenu">metisMenu</a>.'},{image:"slideout.png",state:"demo.layout.navigationMenuSlideout",title:"metisMenu Menu",description:'Use <strong>eeh-navigation-menu</strong> with <a href="https://mango.github.io/slideout">Slideout.js</a>.'},{image:"navbar-and-metis-menu.png",state:"demo.layout.navigationMenuNavbar",title:"Bootstrap Navbar with Metis Menu",description:'Use <strong>eeh-navigation-navbar</strong> with <a href="https://github.com/onokumus/metisMenu">metisMenu</a>.'}]]}]),angular.module("demo").run(["$templateCache",function(e){e.put("app/app.html","<ui-view></ui-view>"),e.put("app/layout/layout.html",'<eeh-slideout is-open="slideOutMenuIsOpen" panel-selector="\'#panel\'" menu-selector="\'#menu\'"><nav id="menu"><eeh-navigation-menu menu-name="\'menuThree\'" nav-pills="" nav-class="\'slideout\'"></eeh-navigation-menu></nav><main id="panel"><nav class="navbar navbar-default navbar-examples"><div class="container-fluid"><div class="navbar-header"><button type="button" class="btn btn-primary navbar-btn" ng-click="slideOutMenuIsOpen = !slideOutMenuIsOpen"><span class="fa fa-bars"></span></button></div></div></nav><header class="text-center"><div class="jumbotron"><div ng-include="\'app/layout/logo.svg\'"></div><h1><a ui-sref="demo.layout.main"><span class="hidden-xs">eeh-navigation · examples</span> <span class="visible-xs">eeh-navigation<br>examples</span></a></h1><p>An AngularJS menu module.</p></div><ul class="project-details list-inline"><li><span>Version 4.1.1</span></li><li><a href="https://github.com/ethanhann/eeh-navigation">GitHub Project</a></li><li><a href="https://github.com/ethanhann/eeh-navigation/tree/3.3.0/doc">Old 3.3.0 Docs</a></li></ul></header><section class="portfolio"><div class="container"><ui-view></ui-view></div></section><footer><div class="container"><p class="text-muted">author <a href="http://www.ethanhann.com" title="Author">Ethan Hann</a></p></div></footer></main></eeh-slideout>'),e.put("app/main/main.html",'<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Examples</h2><h3 class="section-subheading text-muted">Have a look at these examples of how to use the <a href="http://ethanhann.github.com/eeh-navigation">eeh-navigation</a> module.</h3></div></div><div class="row" ng-repeat="exampleSet in exampleSets"><div class="col-md-4 col-sm-6 portfolio-item" ng-repeat="example in exampleSet"><a ui-sref="{{ example.state }}" class="portfolio-link"><div class="portfolio-hover"><div class="portfolio-hover-content"><span class="fa fa-search fa-3x"></span></div></div><img ng-src="app/main/{{ example.image }}" class="img-responsive"></a><div class="portfolio-caption"><h4>{{ example.title }}</h4><p class="text-muted"><span ng-bind-html="example.description"></span></p></div></div></div>'),e.put("app/navigation/navigation.html",'<eeh-navigation-navbar menu-name="\'menuOne\'" brand-text="navbarBrand.text" brand-state="navbarBrand.state"></eeh-navigation-navbar><eeh-navigation-sidebar menu-name="\'menuTwo\'" search-input-submit="searchSubmit"><ui-view></ui-view></eeh-navigation-sidebar>'),e.put("app/navigation-menu/metis-menu.html",'<h1 class="page-header">metisMenu Integration</h1><p>The <a href="https://github.com/ethanhann/eeh-metis-menu">eeh-metis-menu</a> AnglularJS module can be used to add <a href="https://github.com/onokumus/metisMenu">metisMenu</a> menu functionality to the menu generated by the <strong>eeh-navigation-menu</strong> directive. This is accomplished by adding the <strong>eeh-metis-menu</strong> attribute to the same element the <strong>eeh-navigation-menu</strong> directive is applied to.</p><div class="row"><div class="col-sm-3"><div class="metis-menu-vertical"><eeh-navigation-menu menu-name="\'menuOne\'" eeh-metis-menu="" class="sidebar-nav"></eeh-navigation-menu></div></div><div class="col-sm-9"><pre class="lang-html">\n&lt;eeh-navigation-menu menu-name="\'myMenu\'" eeh-metis-menu&gt;\n&lt;/eeh-navigation-menu&gt;\n            </pre></div></div>'),e.put("app/navigation-menu/navbar.html",'<h1 class="page-header">Bootstrap Navbar and Metis Menu</h1><p>Menu directives can be mixed and matched. This example pairs metisMenu with eeh-navigation-navbar. The admin dashboard example pairs the eeh-navigation-navbar and eeh-navigation-sidebar directives.</p><div class="row"><div class="col-lg-12"><eeh-navigation-navbar menu-name="\'menuOne\'" nav-class="\'navbar-inverse navbar-static-top\'" brand-text="\'Navbar\'"></eeh-navigation-navbar></div><div class="col-sm-3"><div class="metis-menu-vertical"><eeh-navigation-menu menu-name="\'menuTwo\'" eeh-metis-menu="" class="sidebar-nav"></eeh-navigation-menu></div></div><div class="col-sm-9"><p><pre class="lang-html">\n&lt;div class="row"&gt;\n    &lt;div class="col-lg-12"&gt;\n        &lt;eeh-navigation-navbar menu-name="\'menuOne\'"\n                                  nav-class="\'navbar-inverse navbar-static-top\'"\n                                  brand-text="\'Navbar\'"&gt;&lt;/eeh-navigation-navbar&gt;\n    &lt;/div&gt;\n    &lt;div class="col-sm-3"&gt;\n        &lt;div class="metis-menu-vertical"&gt;\n            &lt;eeh-navigation-menu menu-name="\'menuTwo\'"\n                                    eeh-metis-menu class="sidebar-nav"&gt;&lt;/eeh-navigation-menu&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n            </pre></p></div></div>'),e.put("app/navigation-menu/navigation-menu.html",'<h1 class="page-header">eeh-navigation-menu</h1><p>By default the <strong>eeh-navigation-menu</strong> directive outputs an unstyled, though functional, menu.</p><div class="row"><div class="col-sm-3"><eeh-navigation-menu menu-name="\'menuOne\'"></eeh-navigation-menu></div><div class="col-sm-9"><pre class="lang-html">\n&lt;eeh-navigation-menu menu-name="\'menuOne\'"&gt;&lt;/eeh-navigation-menu&gt;\n        </pre></div></div><h2>Style eeh-navigation-menu</h2><p>A tiny snippet of CSS can make the menu look a lot better.</p><div class="row"><div class="col-sm-3"><eeh-navigation-menu menu-name="\'menuOne\'" nav-class="\'navigation-menu-demo\'"></eeh-navigation-menu></div><div class="col-sm-9"><pre class="lang-css">\n.navigation-menu ul {\n    list-style: none;\n}\n\n.navigation-menu > ul {\n    border: solid 1px #eeeeee;\n    background: #dddddd;\n    padding: 1em;\n}\n\n.navigation-menu ul li > a {\n    position: relative;\n    display: block;\n    padding: 5px 15px;\n}\n\n.navigation-menu ul li > a:focus,\n.navigation-menu ul li > a:hover {\n    text-decoration: none;\n    background-color: #eeeeee;\n}\n            </pre></div></div>'),e.put("app/navigation-menu/slideout.html",'<h1 class="page-header">Slideout.js Integration</h1><p>The <a href="https://github.com/ethanhann/eeh-slideout">eeh-slideout</a> AnglularJS module can be used to add <a href="https://mango.github.io/slideout">Slideout.js</a> touch slideout menu functionality to the menu generated by the <strong>eeh-navigation-menu</strong> directive. This is accomplished by wrapping the <strong>eeh-navigation-menu</strong> directive in <strong>eeh-slideout</strong> directive, along with the site\'s content.</p><h2>Where is the example?</h2><p>This site uses Slideout.js! Click the button on the top right (or swipe right on mobile) to see the menu in action.</p><div class="row"><div class="col-lg-12"><pre class="lang-html">\n&lt;eeh-slideout is-open="slideOutMenuIsOpen" panel-selector="\'#panel\'" menu-selector="\'#menu\'"&gt;\n    &lt;nav id="menu"&gt;\n        &lt;eeh-navigation-menu menu-name="\'myMenu\'"&gt;&lt;/eeh-navigation-menu&gt;\n    &lt;/nav&gt;\n\n    &lt;main id="panel"&gt;\n        &lt;button ng-click="slideOutMenuIsOpen = !slideOutMenuIsOpen"&gt;\n            toggle slideout menu\n        &lt;/button&gt;\n\n        &lt;section&gt;\n            &lt;p&gt;Main Content&lt;/p&gt;\n        &lt;/section&gt;\n    &lt;/main&gt;\n&lt;/eeh-slideout&gt;\n            </pre></div></div>'),e.put("app/navigation-menu/superfish.html",'<h1 class="page-header">Superfish Integration</h1><p>The <a href="https://github.com/ethanhann/eeh-superfish">eeh-superfish</a> AnglularJS module can be used to add <a href="https://github.com/joeldbirch/superfish">Superfish</a> menu functionality to the menu generated by the <strong>eeh-navigation-menu</strong> directive. This is accomplished by adding the <strong>eeh-superfish</strong> attribute to the same element the <strong>eeh-navigation-menu</strong> directive is applied to.</p><div class="row"><div class="col-lg-12"><eeh-navigation-menu menu-name="\'menuOne\'" eeh-superfish=""></eeh-navigation-menu></div></div><div class="row"><div class="col-lg-12"><pre class="lang-html">\n&lt;eeh-navigation-menu menu-name="\'myMenu\'" eeh-superfish&gt;\n&lt;/eeh-navigation-menu&gt;\n            </pre></div></div>'),e.put("app/partials/alpha.html","<h1>alpha</h1>"),e.put("app/partials/beta.html","<h1>beta</h1>"),e.put("app/partials/bishop.html",'<h1 class="page-header">Bishop</h1><blockquote><div>A bishop (♗,♝) is a piece in the board game of chess. Each player begins the game with two bishops. One starts between the king\'s knight and the king, the other between the queen\'s knight and the queen. In algebraic notation the starting squares are c1 and f1 for White\'s bishops, and c8 and f8 for Black\'s bishops.</div><a class="pull-right" href="http://en.wikipedia.org/wiki/Bishop_(chess)">~Wikipedia</a></blockquote>'),e.put("app/partials/blank.html",'<h1 class="page-header">Blank</h1><p>This is a blank demo page</p>'),e.put("app/partials/home.html",'<div><h1 class="page-header">Home</h1></div><p>A demo of the Bootstrap <a href="http://www.ethanhann.com/eeh-navigation/#/docs/eeh-navigation-navbar">eeh-navigation-navbar</a> and <a href="http://www.ethanhann.com/eeh-navigation/#/docs/eeh-navigation-sidebar">eeh-navigation-sidebar</a> directives provided by the <a href="http://www.ethanhann.com/eeh-navigation">eeh-navigation</a> AngularJS menu module.</p>'),e.put("app/partials/knight.html",'<h1 class="page-header">Knight</h1><blockquote><div>The knight (♘ ♞) is a piece in the game of chess, representing a knight (armored cavalry). It is normally represented by a horse\'s head and neck. Each player starts with two knights, which begin on the row closest to the player, one square from each corner.</div><a class="pull-right" href="http://en.wikipedia.org/wiki/Knight_(chess)">~Wikipedia</a></blockquote>'),e.put("app/search/search.html",'<div ng-if="searchTerm"><h1>Search results <small>for {{ searchTerm }}</small></h1><ul><li>example result</li><li>example result</li><li>example result</li><li>...</li></ul></div><p><div ng-if="!searchTerm"><div alert="" alert-level="info"><span class="glyphicon glyphicon-arrow-left"></span> Enter a search in the sidebar.</div></div></p>'),e.put("app/components/examples-menu/examples-menu.html",'<eeh-navigation-menu menu-name="\'menuThree\'" nav-pills=""></eeh-navigation-menu>')}]);