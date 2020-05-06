import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasPresuAComponent } from './clas-presu-a/clas-presu-a.component';
import { ClasPresuBComponent } from './clas-presu-b/clas-presu-b.component';



@NgModule({
  declarations: [ClasPresuAComponent, ClasPresuBComponent],
  imports: [
    CommonModule
  ]
})
export class ClasPresuModule { }
