import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Temperatura y Humedad Relativa'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Tiempo'
      }
    },
    yAxis: [
      {
        title: {
          text: 'Temperatura (°C)'
        },
        opposite: false
      },
      {
        title: {
          text: 'Humedad Relativa (%)'
        },
        opposite: true
      }
    ],
    series: [
      {
        name: 'Temperatura',
        type: 'line',
        data: []
      },
      {
        name: 'Humedad Relativa',
        type: 'line',
        yAxis: 1,
        data: []
      }
    ]
  };

  private chart: Highcharts.Chart | undefined;
  temperaturaActual: number = 0;
  humedadActual: number = 0;

  ngOnInit() {
    this.chart = Highcharts.chart('container', this.chartOptions);
    this.simularDatosEnTiempoReal();
  }

  simularDatosEnTiempoReal() {
    setInterval(() => {
      const now = new Date().getTime();
      this.temperaturaActual = Math.random() * 30; // Temperatura aleatoria
      this.humedadActual = Math.random() * 100; // Humedad aleatoria

      if (this.chart) {
        this.chart.series[0].addPoint([now, this.temperaturaActual], true, false);
        this.chart.series[1].addPoint([now, this.humedadActual], true, false);
        
        if (this.chart.series[0].data.length > 30) {
          this.chart.series[0].data[0].remove();
          this.chart.series[1].data[0].remove();
        }
      }
    }, 1000); // Actualizar cada segundo
  }
}