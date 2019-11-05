import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GittyComponent } from './gitty/gitty.component';
import { GittyNavbarComponent } from './gitty-navbar/gitty-navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GittyAboutComponent } from './gitty-about/gitty-about.component';
import { GittyHttpService } from './gitty-http/gitty-http.service';
;

@NgModule({
  declarations: [
    AppComponent,
    GittyComponent,
    GittyNavbarComponent,
    ErrorPageComponent,
    GittyAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GittyHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
