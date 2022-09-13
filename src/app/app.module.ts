import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CurrentComponent } from './current/current.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterPipe } from './filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { HttpInterceptors } from './httpinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    UpcomingComponent,
    CurrentComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptors,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
