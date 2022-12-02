import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EliotComponent } from "./ERA/eliot.component";
import { EspeComponent } from "./ERA/espe.component";
import { CursosComponent } from "./ERA/curso.component";
import { LenguajesModule } from './lenguajes/lenguajes.module';

@NgModule({
  declarations: [
    AppComponent, EliotComponent, EspeComponent, CursosComponent
  ],
  imports: [
    BrowserModule,
    LenguajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
