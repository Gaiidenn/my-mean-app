import {Component, bootstrap} from 'angular2/angular2'
import {RouteConfig, RouterLink, RouterOutlet, LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

import {LoginComponent} from './components/LoginComponent';
import {HomeComponent} from './components/HomeComponent';

@Component({
	selector: 'my-app',
	template: `<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
  {path: '/', component: HomeComponent, as: 'Home'},
  {path: '/login', component: LoginComponent, as: 'Login'}
])
export class App {
}
bootstrap(App, [
    ROUTER_PROVIDERS,
    bind(LocationStrategy).toClass(PathLocationStrategy)
]);
