import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { AuthActions } from '../../auth/actions/auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
   
  /**
   * Creates an instance of AuthService.
   * @param {HttpService} http
   * @param {AuthActions} actions
   * @param {Store<AppState>} store
   *
   * @memberof AuthService
   */
  constructor(private http: HttpService,
              private actions: AuthActions,
              private store: Store<AppState>) { }
  
  /**
   *
   *
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  authorized(): Observable<any> {
    return this.http
      .get('spree/api/v1/users')
      .map((res: Response) => res.json())
      .catch(err => Observable.empty());
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
 *
 * @param void
 * @returns any
 *
 * @memberof AuthService
 */
  getUserRole(): any {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    const userData = JSON.parse(localStorage.getItem('selleruser'));
    const tokenPayload = jwtHelper.decodeToken(userData.token);
    return tokenPayload.role;
  }

  /**
  *
  * @param void
  * @returns boolean
  *
  * @memberof AuthService
  */
  isAuthenticated(): boolean {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    const userData = JSON.parse(localStorage.getItem('selleruser'));
    if (!userData) {
      return false;
    } else {
      return !jwtHelper.isTokenExpired(userData.token);
    }
  }

  /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  login(data): Observable<any> {
    return this.http.post(
      'v1/useraccount/account/login', data)
      .map((res: Response) => {
        data = res.json();
        if (data.message == 'Found') {
          // Setting token after login
          //this.setTokenInLocalStorage(data);
        this.store.dispatch(this.actions.loginSuccess());
          localStorage.setItem('selleruser', JSON.stringify(data));
        } else {
          data.error = true;
          this.http.loading.next({
            loading: false,
            hasError: true,
            hasMsg: 'Please enter valid Credentials'
          });
        }
        return data;
      });
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

   /**
    *
    * @param {void}
    * @returns {Observable<any>}
    *
    * @memberof AuthService
    */
  getRolesList(): Observable<any> {
    return this.http.get('v1/useraccount/roles')
      .map((res: Response) => res.json());
  }

   /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  // register(data): Observable<any> {
  //   return this.http.post('v1/useraccount/account/save', data)
  //   .map((res: Response) => {
  //     let response = res.json();
  //     if (response.message == 'Saved') {
  //       const d = Date.now();
  //       this.setTokenInLocalStorage({
  //         id: response.id,
  //         firstName: data.firstName,
  //         lastName: data.lastName,
  //         mobileNumber: data.mobileNumber,
  //         gender: data.gender,
  //         email: data.username,
  //         username: data.username,
  //         dateCreated: d,
  //         dateUpdated: d,
  //         dateAuthorized: d,
  //         dateTime: d,
  //       });
  //       this.store.dispatch(this.actions.loginSuccess());
  //     }
  //     else {
  //       console.log('error register');
  //     }
  //     return response;
  //   });
  // }
  register(data): Observable<any> {
    return this.http.post('v1/useraccount/account/save', data)
      .map((res: Response) => res.json());

  }

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

   

  /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  views(id): Observable<any> {
    return this.http.get(
      `v1/useraccount/account/${id}/view`
    ).map((res: Response) => {
      const response = res.json();
      return response;
    })
      .catch(res => Observable.empty());
    }
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  

  /**
   *
   *
   * @private
   * @param {any} user_data
   *
   * @memberof AuthService
   */
  private setTokenInLocalStorage(user_data): void {
    const jsonData = JSON.stringify(user_data);
    localStorage.setItem('selleruser', jsonData);
  }
  
}
