import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FullLayoutV2Component } from './layouts/full-layout-v2/full-layout-v2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    FullLayoutComponent,
    FullLayoutV2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MaterialModule,
    JwtModule
  ],
  providers: [AuthGuardGuard,
              {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
              { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
              JwtHelperService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
