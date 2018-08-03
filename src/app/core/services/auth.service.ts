import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http';
import { Response } from '@angular/http';
@Injectable()
export class AuthService {

  constructor(private http: HttpService) { }
  

   /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  view(): Observable<any> {
    return this.http.get(
      `v1/useraccount`
    ).map((res: Response) => {
      let data = res.json();
      console.log(data);
      return data;
      
    });
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }
  
}
