import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserIdentityModel } from '../Models/UserIdentityModel';
import { ChannelModule } from '../Modules/channel/channel.module';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = "http://localhost:3000/UserIdentity";
  UserIdentity: any;
  CurrentChannel: string;
  UserName!: string | null;

  getUserIdentity() {
    let APIURL='';
    switch (this.CurrentChannel) {
      case 'PublicSite':
        this.UserName = localStorage.getItem("UserName");
         APIURL = 'http://yubtub.club/WebAPIManager/api/UserAccount/?Email=' + this.UserName;
        break;
        case 'LocalHost':
          APIURL = "http://localhost:3000/UserIdentity";
          break;
      default:
        APIURL = "http://localhost:3000/UserIdentity";
    }

    return this.httpClient.get<UserIdentityModel[]>(APIURL);
  };

  constructor(private httpClient: HttpClient, private channelModule: ChannelModule) {
    this.CurrentChannel = channelModule.getChannel();
    console.log('this.CurrentChannel(ln21): ', this.CurrentChannel);
  };
}
