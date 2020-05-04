import { NgModule } from '@angular/core';

// modulos de rutas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// modulo principal
import { AppComponent } from './app.component';
// libreria de horario
import { DatePipe } from '@angular/common'

// modulo de recursos compartidos
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule, 
      BrowserAnimationsModule, 
      HttpClientModule,
      AppRoutingModule,
      SharedModule, 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }