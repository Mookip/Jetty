import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAccountComponent } from './account/components/my-account/my-account.component';
import { MyAccountContainer } from './account/components/my-account/my-account.container';
import { MyAccountErrorComponent } from './account/components/my-account-error/my-account-error.component';
import { MyAccountErrorContainer } from './account/components/my-account-error/my-account-error.container';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './account/interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    MyAccountContainer,
    MyAccountErrorComponent,
    MyAccountErrorContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
