import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrincipalComponent } from "./principal.component";

@NgModule({
    declarations: [
       PrincipalComponent,
    ],
    imports: [
       CommonModule,
       RouterModule,
    ],
    schemas: [
       CUSTOM_ELEMENTS_SCHEMA
    ]
 })
 
 export class PrincipalModule {}