"use strict";angular.module("demo",["eehNavigation","pascalprecht.translate","ui.bootstrap","ui.router"]).config(["$stateProvider","$translateProvider","$urlRouterProvider","eehNavigationProvider",function(e,t,l,a){l.otherwise("/"),e.state("demo",{"abstract":!0,templateUrl:"app/app.html"}).state("demo.authenticated",{"abstract":!0,controller:"AuthenticatedCtrl",templateUrl:"app/authenticated/authenticated.html"}).state("demo.authenticated.home",{url:"/",templateUrl:"app/partials/home.html"}).state("demo.authenticated.blank",{url:"/blank",templateUrl:"app/partials/blank.html"}).state("demo.authenticated.alpha",{url:"/alpha",templateUrl:"app/partials/alpha.html"}).state("demo.authenticated.beta",{url:"/beta",templateUrl:"app/partials/beta.html"}).state("demo.authenticated.knight",{url:"/knight",templateUrl:"app/partials/knight.html"}).state("demo.authenticated.bishop",{url:"/bishop",templateUrl:"app/partials/bishop.html"}).state("demo.authenticated.search",{url:"/search?query",controller:"SearchCtrl",templateUrl:"app/search/search.html"}),a.iconBaseClass("glyphicon"),a.menuItem("menuOne.home",{text:"Home",iconClass:"glyphicon-home",state:"demo.authenticated.home",weight:-10}).menuItem("menuOne.hiddenChildren",{text:"Hidden Children"}).menuItem("menuOne.hiddenChildren.hiddenChildren",{text:"Hidden Child",visible:!1}).menuItem("menuOne.hiddenChildren.anotherHiddenChildren",{text:"Another Hidden Child",visible:!1}).menuItem("menuOne.user",{text:"me",iconClass:"glyphicon-user"}).menuItem("menuOne.user.blank",{text:"Blank",iconClass:"glyphicon-star",state:"demo.authenticated.blank"}).menuItem("menuOne.user.example-com",{text:"example.com",iconClass:"glyphicon-link",href:"http://example.com",target:"_blank"}).menuItem("menuOne.user.divider1",{isDivider:!0}).menuItem("menuOne.user.visible",{text:"Visible",iconClass:"glyphicon-eye-open",href:"http://example.com",isVisible:!0}).menuItem("menuOne.user.hidden",{text:"Hidden",iconClass:"glyphicon-eye-slash",href:"http://example.com",isVisible:!1});var i=function(e,l){a.menuItem("menuOne.language").text=l,t.use(e)};a.menuItem("menuOne.language",{text:"English",iconClass:"glyphicon-globe",weight:0}).menuItem("menuOne.language.en",{text:"English",click:function(){i("en",this.text)},weight:1}).menuItem("menuOne.language.de",{text:"Deutsch",click:function(){i("de",this.text)},weight:0}),a.menuItem("menuTwo.home",{text:"Home",iconClass:"glyphicon-home",state:"demo.authenticated.home",weight:0}).menuItem("menuTwo.blank",{text:"Blank",iconClass:"glyphicon-star",state:"demo.authenticated.blank"}).menuItem("menuTwo.click",{text:"Click",iconClass:"glyphicon-asterisk"}).menuItem("menuTwo.external",{text:"Link to example.com",iconClass:"glyphicon-link",href:"http://example.com",target:"_blank"}).menuItem("menuTwo.visible",{text:"Visible",iconClass:"glyphicon-eye-open",href:"http://example.com",isVisible:!0}).menuItem("menuTwo.hidden",{text:"Hidden",iconClass:"glyphicon-eye-closed",href:"http://example.com",isVisible:!1}).menuItem("menuTwo.multilevel",{text:"Multi level",iconClass:"glyphicon-folder-close",isCollapsed:!0}).menuItem("menuTwo.multilevel.firstlevel1",{text:"First level - 1",iconClass:"glyphicon-file",state:"demo.authenticated.blank"}).menuItem("menuTwo.multilevel.firstlevel2",{text:"First level - 2",iconClass:"glyphicon-file",state:"demo.authenticated.blank"}).menuItem("menuTwo.multilevel.firstlevel3",{text:"First level - 3",iconClass:"glyphicon-folder-close",isCollapsed:!1}).menuItem("menuTwo.multilevel.firstlevel3.secondlevel1",{text:"Second level - 1: Alpha",iconClass:"glyphicon-file",state:"demo.authenticated.alpha"}).menuItem("menuTwo.multilevel.firstlevel3.secondlevel2",{text:"Second level - 2",iconClass:"glyphicon-file",state:"demo.authenticated.blank"}).menuItem("menuTwo.multilevel.firstlevel4",{text:"First level - 4",iconClass:"glyphicon-folder-close",isCollapsed:!1}).menuItem("menuTwo.multilevel.firstlevel4.secondlevel1",{text:"Second level - 1: Beta",iconClass:"glyphicon-file",state:"demo.authenticated.beta"}).menuItem("menuTwo.multilevel.firstlevel4.secondlevel2",{text:"Second level - 2",iconClass:"glyphicon-file",state:"demo.authenticated.blank"}).menuItem("menuTwo.multilevel.firstlevel5",{text:"First level - 5: Home",iconClass:"glyphicon-file",state:"demo.authenticated.home"}).menuItem("menuTwo.chess",{text:"Chess",iconClass:"glyphicon-king",isCollapsed:!0}).menuItem("menuTwo.chess.knight",{text:"Knight",iconClass:"glyphicon-knight",state:"demo.authenticated.knight"}).menuItem("menuTwo.chess.bishop",{text:"Bishop",iconClass:"glyphicon-bishop",state:"demo.authenticated.bishop"}),t.useSanitizeValueStrategy("escaped").translations("en",{Blank:"Blank",Home:"Home",Click:"Click","Link to example.com":"Link to example.com",Visible:"Visible","Multi level":"Multi level","First level - 1":"First level - 1","First level - 2":"First level - 2","First level - 3":"First level - 3","Second level - 1":"Second level - 1","Second level - 2":"Second level - 2","First level - 4":"First level - 4","First level - 5":"First level - 5","User Profile":"User Profile",Logout:"Logout",Chess:"Chess",Bishop:"Bishop",Knight:"Knight"}).translations("de",{Blank:"Leer",Home:"Zuhause",Click:"Klicken","Link to example.com":"Link zu example.com",Visible:"Sichtbar","Multi level":"Mehrere Ebenen","First level - 1":"Erste Ebene - 1","First level - 2":"Erste Ebene - 2","First level - 3":"Erste Ebene - 3","Second level - 1":"Zweite Ebene - 1","Second level - 2":"Zweite Ebene - 2","Erste Ebene - 4":"Erste Ebene - 4","Erste Ebene - 5":"Erste Ebene - 5","User Profile":"Benutzerprofil",Logout:"Abmelden",Chess:"Schach",Bishop:"Bischof",Knight:"Ritter"}),t.preferredLanguage("en")}]),angular.module("demo").controller("SearchCtrl",["$scope","$stateParams",function(e,t){e.searchTerm=t.query}]),angular.module("demo").controller("AuthenticatedCtrl",["$scope","$state","$window","eehNavigation",function(e,t,l,a){a.menuItem("menuOne.user").text="Ethan",a.menuItem("menuOne.user.logout",{text:"Logout",iconClass:"glyphicon-log-out",click:function(){l.alert("Faux logout")}}),a.menuItem("menuTwo.click").click=function(){l.alert("Tada")},e.searchSubmit=function(e){t.go("demo.authenticated.search",{query:e})},e.navbarBrand={text:"eeh-navigation Demo",state:"demo.authenticated.home"}}]),angular.module("demo").run(["$templateCache",function(e){e.put("app/app.html","<ui-view></ui-view>"),e.put("app/authenticated/authenticated.html",'<eeh-navigation-navbar root-menu-name="\'menuOne\'" brand-text="navbarBrand.text" brand-state="navbarBrand.state"></eeh-navigation-navbar><eeh-navigation-sidebar root-menu-name="\'menuTwo\'" search-input-submit="searchSubmit"><ui-view></ui-view></eeh-navigation-sidebar>'),e.put("app/partials/alpha.html","<h1>alpha</h1>"),e.put("app/partials/beta.html","<h1>beta</h1>"),e.put("app/partials/bishop.html",'<h1 class="page-header">Bishop</h1><blockquote><div>A bishop (♗,♝) is a piece in the board game of chess. Each player begins the game with two bishops. One starts between the king\'s knight and the king, the other between the queen\'s knight and the queen. In algebraic notation the starting squares are c1 and f1 for White\'s bishops, and c8 and f8 for Black\'s bishops.</div><a class="pull-right" href="http://en.wikipedia.org/wiki/Bishop_(chess)">~Wikipedia</a></blockquote>'),e.put("app/partials/blank.html",'<h1 class="page-header">Blank</h1><p>This is a blank demo page</p>'),e.put("app/partials/home.html",'<div><h1 class="page-header">Home</h1></div><p>A demo for <a href="../">eeh-navigation</a>, a data-driven AngularJS Bootstrap navigation directive.</p>'),e.put("app/partials/knight.html",'<h1 class="page-header">Knight</h1><blockquote><div>The knight (♘ ♞) is a piece in the game of chess, representing a knight (armored cavalry). It is normally represented by a horse\'s head and neck. Each player starts with two knights, which begin on the row closest to the player, one square from each corner.</div><a class="pull-right" href="http://en.wikipedia.org/wiki/Knight_(chess)">~Wikipedia</a></blockquote>'),e.put("app/search/search.html",'<div ng-if="searchTerm"><h1>Search results <small>for {{ searchTerm }}</small></h1><ul><li>example result</li><li>example result</li><li>example result</li><li>...</li></ul></div><p><div ng-if="!searchTerm"><div alert="" alert-level="info"><span class="glyphicon glyphicon-arrow-left"></span> Enter a search in the sidebar.</div></div></p>')}]);