import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HistorialRoutingModule } from './historial-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    HighchartsChartModule, 
   
  ]
})
export class HistorialModule { }
