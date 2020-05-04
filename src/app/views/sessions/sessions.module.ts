import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SigninComponent } from './signin/signin.component';
// libreria de formularion reactivos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// modulo de recursos compartidos login
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SessionsRoutingModule,
    SharedComponentsModule,

  ],
  declarations: [SigninComponent]
})
export class SessionsModule { }
