import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [   // component
    AppComponent,
  ],
  imports: [        // module
    BrowserModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
