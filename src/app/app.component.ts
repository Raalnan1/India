import { Component, Input, OnInit } from '@angular/core';
import { UserIdentityModel } from './Models/UserIdentityModel';
import { APIService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hotel';
  static UserIdentity: UserIdentityModel[] | any;

  constructor(private _APIService: APIService) { };

  ngOnInit() {
    this.getUserIdentity();
  }

  getUserIdentity() {
    return this._APIService.getUserIdentity().subscribe((UserIdentity => {
      AppComponent.UserIdentity = UserIdentity;
      console.log('UserIdentity: ', UserIdentity);
      console.log('this.UserIdentity: ', AppComponent.UserIdentity);
    }))
  };
}


