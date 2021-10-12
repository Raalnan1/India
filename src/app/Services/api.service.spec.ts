import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ChannelModule } from '../Modules/channel/channel.module';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { APIService } from './api.service';
import { UserIdentityModel } from '../Models/UserIdentityModel';

describe('APIService', () => {
  let service: APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIService, ChannelModule, HttpClient, HttpClientTestingModule,]
      , imports: [HttpClientModule, ChannelModule, UserIdentityModel]
    });
    service = TestBed.inject(APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
