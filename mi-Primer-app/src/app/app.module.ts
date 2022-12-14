import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EliotComponent } from "./ERA/eliot.component";
import { EspeComponent } from "./ERA/espe.component";
import { CursosComponent } from "./ERA/curso.component";

@NgModule({
  declarations: [
    AppComponent, EliotComponent, EspeComponent, CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
