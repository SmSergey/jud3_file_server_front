import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { URLS } from '../../../../common/api-config';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsApiService {
  constructor(private http: HttpClient) {}

  public rebuildApp(projectName: string, token: string): Observable<any> {
    return this.http.get(URLS.REBUILD_PROJECT_URL(projectName, token));
  }

  public getAppEnv(projectName: string, fileName: string) {
    return this.http.get(URLS.GET_PROJECT_ENV_FILE(projectName, fileName), { responseType: 'text' });
  }

  public updateAppEnv(projectName: string, fileName: string, data: string) {
    return this.http.post(URLS.UPDATE_PROJECT_ENV_FILE(projectName, fileName), data, { responseType: 'text' });
  }
}
