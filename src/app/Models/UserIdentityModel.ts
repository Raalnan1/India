import { NgModule } from "@angular/core";

@NgModule({})

export class UserIdentityModel {
    IsAuthenticated: boolean = false;
    Name: string = "unknown";
    Id: string = "unknown";
    PhoneNumber: string = "unknown";
    EmailConfirmed: boolean = false;
    UserName: string = "unknown";
};