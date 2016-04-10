import {Component} from 'angular2/angular2'

@Component({
	template: '<h1>{{titleName}}</h1>',
	selector: 'home'
})
export class LoginComponent{
        titleName: string
        constructor(){
            this.titleName = "Hello from Login"
	}

}
