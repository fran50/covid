import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';
import { CovidhComponent } from './covidh/covidh.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FiltroComponent, CovidhComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FiltroComponent,
    CovidhComponent,
    FormsModule

  ]


})
export class SharedModule {

}
