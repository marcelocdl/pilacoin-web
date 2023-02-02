import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TransferenciaComponent } from "./transferencia.component";


@NgModule({
    declarations: [
       TransferenciaComponent,
    ],
    imports: [
       CommonModule,
       RouterModule,
    ],
    schemas: [
       CUSTOM_ELEMENTS_SCHEMA
    ]
 })
 
 export class TransferenciaModule {}