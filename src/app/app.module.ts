import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EtudiantsformatesComponent } from './etudiantsformates/etudiantsformates.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    EtudiantsformatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
