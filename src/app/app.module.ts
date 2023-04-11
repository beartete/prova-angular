import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoedaComponent } from './moeda/moeda.component';

@NgModule({
  declarations: [
    AppComponent,
    MoedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // adicionei
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
