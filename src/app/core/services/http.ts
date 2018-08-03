import { Injectable } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
    Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService extends Http {
    public loading = new Subject<any>();

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
    ) {
        super(backend, defaultOptions);
    }
}