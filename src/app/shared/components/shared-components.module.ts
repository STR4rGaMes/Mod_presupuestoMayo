import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BtnLoadingComponent } from './btn-loading/btn-loading.component';

import { LayoutsModule } from './layouts/layouts.module';

const components = [
  BtnLoadingComponent,
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
