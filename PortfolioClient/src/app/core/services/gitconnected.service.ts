import { Injectable } from '@angular/core';
// import { AppSettings } from 'appsettings-json-reader';
import { ConfigSettings } from '../models/configSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitConnectedProfile } from '../models/gitConnectedProfile';

@Injectable({
  providedIn: 'root'
})
export class GitconnectedService {

  // appSettings: ConfigSettings = AppSettings.readAppSettings();
  constructor(private http: HttpClient) { }

  getProfile() : Observable<GitConnectedProfile> {
    return this.http.get<GitConnectedProfile>("https://gitconnected.com/v1/portfolio/gabogim27");
  }
}
