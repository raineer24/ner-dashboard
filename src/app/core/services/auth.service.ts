import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

}
