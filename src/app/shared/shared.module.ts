// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { RouterModule } from '@angular/router';
// // libreria para dropbox list scrollbar
// // import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// // notificaciones bootstrap
// // import { ToastrModule } from 'ngx-toastr';
// // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedComponentsModule } from './components/shared-components.module';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     RouterModule,
//     SharedComponentsModule,
//     // notificaciones responsive
//     // ToastrModule.forRoot(),
//   ]
// })
// export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        SharedComponentsModule,
        RouterModule,
    ]
})
export class SharedModule { }
