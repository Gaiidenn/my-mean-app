System.register(['angular2/angular2', 'angular2/router', './components/LoginComponent', './components/HomeComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, router_1, LoginComponent_1, HomeComponent_1;
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (LoginComponent_1_1) {
                LoginComponent_1 = LoginComponent_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    angular2_1.Component({
                        selector: 'my-app',
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: HomeComponent_1.HomeComponent, as: 'Home' },
                        { path: '/login', component: LoginComponent_1.LoginComponent, as: 'Login' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
            angular2_1.bootstrap(App, [
                router_1.ROUTER_PROVIDERS,
                bind(router_1.LocationStrategy).toClass(router_1.PathLocationStrategy)
            ]);
        }
    }
});
