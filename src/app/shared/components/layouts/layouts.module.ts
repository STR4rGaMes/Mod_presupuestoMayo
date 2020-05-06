import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// icons


// rutas
import { LayoutsRoutingModule } from "../layouts-routing.module";

// vistas
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FooterComponent} from "./admin-layout/footer/footer.component";
import { HeaderComponent } from "./admin-layout/header/header.component";
import { SidebarComponent } from "./admin-layout/sidebar/sidebar.component";

// componente de login 
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';

// librerias
import { FormsModule } from '@angular/forms';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const components = [
  // HeaderSidebarCompactComponent,
  FooterComponent,
  AdminLayoutComponent,
  HeaderComponent,
  SidebarComponent,
  // SidebarCompactComponent,
  // AdminLayoutSidebarCompactComponent,
  AuthLayoutComponent,
  BlankLayoutComponent,
];

@NgModule({
imports: [
  // NgbModule,
  RouterModule,
  FormsModule,
  CommonModule,
  LayoutsRoutingModule,
],
declarations: components,
exports: components
})
export class LayoutsModule { }
