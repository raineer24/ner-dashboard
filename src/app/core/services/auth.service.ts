import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http';
@Injectable()
export class AuthService {

  constructor(private http: HttpService) { }
  
  message = 'What the fuck';
  getMovies(message){
    return this.message;
  }
  
}
