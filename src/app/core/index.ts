import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http';

export function httpInterceptor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
) {
    return new HttpService(backend, defaultOptions);
}

@NgModule({
    declarations: [
        // components
        // DummyService,
        // pipes
    ],
    exports: [
        // components
        // DummyService
    ],
    imports: [
        
    ],
    providers: [
        AuthService,
        {
            provide: HttpService,
            useFactory: httpInterceptor,
            deps: [XHRBackend, RequestOptions]
        },

    ]
})
export class CoreModule { }
