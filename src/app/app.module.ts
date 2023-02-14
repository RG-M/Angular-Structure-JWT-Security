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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
