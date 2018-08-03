import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

// Services
import { AuthService } from './services/auth.service';

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
        AuthService

    ]
})
export class CoreModule { }
