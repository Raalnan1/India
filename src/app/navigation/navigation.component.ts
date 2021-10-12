import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ChannelModule } from '../Modules/channel/channel.module';
import { APIService } from '../Services/api.service';
import { UserIdentityModel } from '../Models/UserIdentityModel';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  CurrentChannel: string;
  UserIdentity: UserIdentityModel[] | any;


  getUserIdentity() {
    return this._APIService.getUserIdentity().subscribe((UserIdentity => {
      this.UserIdentity = UserIdentity;
      console.log('UserIdentity(ln26): ', UserIdentity);
    }))
  };

  constructor(private breakpointObserver: BreakpointObserver
    , private _APIService: APIService
    , channelModule: ChannelModule) {
    this.CurrentChannel = channelModule.getChannel();
    this.getUserIdentity();
    console.log('this.CurrentChannel(ln24): ' + this.CurrentChannel);
  }

}
