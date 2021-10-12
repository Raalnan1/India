import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIModule } from '../api/api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, APIModule
  ]
})

export class ChannelModule {
  public getChannel() {
    var HRef = location.href.toLowerCase(); // Get the location
    var aryHRef = HRef.split('/');  // Split the location into an array
    var CurrentNode = aryHRef[0]; // Select the first node in the array
    var CurrentChannel: string = "UnRegistered";
    if (CurrentNode === 'http:') {
      CurrentNode = aryHRef[2];
      var aryDomain = CurrentNode.split(':');
      CurrentNode = aryDomain[0];

      if (CurrentNode === 'localhost') {
        CurrentChannel = "LocalHost";
      } else {
        if (CurrentNode === 'yubtub.club') {
          CurrentChannel = "PublicSite";
        } else {
          CurrentChannel = "UnRegistered";
        }
      }
    } else {
      if (CurrentNode === 'https:') {
        CurrentChannel = "IntraNet";
      }
    }
    this.apiModule.CurrentChannel=CurrentChannel;
    return CurrentChannel;
  };

  constructor(private apiModule: APIModule) { };

}
