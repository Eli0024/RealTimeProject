import { Component, HostBinding, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Authservice } from '../auth/auth.service';
import { FormsModule } from '@angular/forms'; import * as Highcharts from 'highcharts';
import { HomeComponent } from "../home/home.component";
import { ParametrosService } from '../establecer/parametros.service';
import { Parametro } from '../establecer/parametros';
import { HeaderComponent } from "../header/header.component";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, HomeComponent, CommonModule, FormsModule, HeaderComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, public autservice: Authservice, public paramservice: ParametrosService,
    public userService: Authservice

  ) { }
  param: any [] = []
  parametros:Parametro[]=[];
  intervalo: any;
  private mediciones: Array<{ temperatura: number, humedad: number }> = [];

  ngOnInit() {
    this.connectWebSocket();
    this.mostrarFechaYHora();
    this.iniciarTemporizador();

    this.chart = Highcharts.chart('container', this.chartOptions);
    this.getUserLogged();
  }
  //grafica 
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Grafica de Temperatura'
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
          text: 'Humedad (%)'
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
        name: 'Humedad',
        type: 'line',
        yAxis: 1,
        data: []
      }
    ]
  };
  // conexion con el websocket
  public chart: Highcharts.Chart | undefined;
  datosenTiempoReal() {
    setInterval(() => {
      this.temperatura;
      this.humedad;

      if (this.chart) {
        this.chart.series[0].addPoint([this.temperatura], true, false);
        this.chart.series[1].addPoint([this.humedad], true, false);

        if (this.chart.series[0].data.length > 30) {
          this.chart.series[0].data[0].remove();
          this.chart.series[1].data[0].remove();
        }
      }
    }, 4000);
  }
  // conexion WebSocket y configuracion
  temperatura: number = 0;
  humedad: number = 0;
  public ws!: WebSocket;
  connectWebSocket() {
    this.ws = new WebSocket('ws://172.20.10.11/ws');  // IP del servidor iPhone
    // this.ws = new WebSocket('ws://192.168.1.101/ws');
    this.ws.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        this.temperatura = parseFloat(data.temperatura.toFixed(1));
        this.humedad = parseFloat(data.humedad.toFixed(1));
        this.updateCircles();
        this.alerta();
        this.datosenTiempoReal();
        this.getHumidityColor(this.humedad);
        this.getTemperatureColor(this.temperatura);
      } catch (error) {
        console.error('Error al procesar el mensaje:', error);
      }
    };
    this.ws.onopen = () => {
      console.log('Conexión WebSocket establecida');
      // this.inciarmediciones();
    };
    this.ws.onclose = () => {
      console.log('Conexión WebSocket cerrada');
    };
  }
  // configuracion de la alerta para el WebSocket
  alerta() {
    this.paramservice.getParametros().subscribe(
      (data: any) => {
        this.param = data
        const { tem_minima, tem_maxima } = data[data.length - 1];
        if (this.temperatura > tem_maxima) {
          Swal.fire("Alerta de temperatura muy alta!");
        }
        if (this.temperatura < tem_minima) {
          Swal.fire("Alerta de temperatura muy baja!");
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  iniciarTemporizador() {
    this.intervalo = setInterval(() => {
      if (this.temperatura !== undefined && this.humedad !== undefined) {
        const medidas = {
          temperatura: this.temperatura,
          humedad: this.humedad,
          timestamp: new Date().toISOString()
        };

        // Guardar la medición al servidor
        this.autservice.registerMedidas(medidas).subscribe(response => {
          console.log('Mediciones guardadas:', response);
        }, error => {
          console.error('Error al guardar las mediciones:', error);
        });
      }
    }, 15000); // 30 minutos 30 * 60 * 1000
  }



  // configuracion para enviar datos del websocket al la ip
  // async mediciones() {
  //   const medidas = {
  //     temperatura: this.temperatura,
  //     humedad: this.humedad,
  //     timestamp: new Date().toISOString()
  //   };
  //   setInterval(async () => {
  //     await this.mediciones();
  //   }, 10000); // 30000 ms = 30 segundos
  //   try {
  //     const response: any = await this.autservice.registerMedidas(medidas).toPromise();
  //     console.log('Medidas guardadas:', response);
  //   } catch (error) {
  //     console.error('Error al guardar las medidas:', error);
  //   }
  // // }
  // inciarmediciones() {
  //   setInterval(async () => {
  //     await this.mediciones();

  //   }, 10000);
  // }
  //color de los circulos
  getTemperatureColor(temperatura: number): string {
    if (temperatura < 15) {
      return 'lightblue'; // Frío
    } else if (temperatura < 25) {
      return 'yellow'; // Templado
    } else {
      return 'orange'; // Caliente
    }
  }


  getHumidityColor(humedad: number): string {
    if (humedad < 30) {
      return 'brown'; // Seco
    } else if (humedad < 60) {
      return 'green'; // Moderado
    } else {
      return 'lightblue'; // Húmedo
    }
  }

  updateCircles() {
    const tempColor = this.getTemperatureColor(this.temperatura);
    const humColor = this.getHumidityColor(this.humedad);

    const tempCircle = document.getElementById('temperatureCircle');
    const humCircle = document.getElementById('humidityCircle');

    const circuloexte = tempCircle?.parentElement;
    if (circuloexte) {
      circuloexte.style.backgroundColor = tempColor
    }
    if (tempCircle) {
      tempCircle.style.backgroundColor = 'white';
      tempCircle.textContent = `Temperatura${this.temperatura}°C`;
    }

    const circuloexhum = humCircle?.parentElement;
    if (circuloexhum) {
      circuloexhum.style.backgroundColor = humColor
    }


    if (humCircle) {
      humCircle.style.backgroundColor = 'white';
      humCircle.textContent = `Humedad ${this.humedad}%`;
    }
  }
  logutsesion() {
    this.autservice.loogouttoken();
    this.router.navigate(['/']);
  }

  obtenerFechaYHoraActual(): string {
    const fecha = new Date();

    const opciones: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    return fecha.toLocaleString('es-ES', opciones);

  }
  mostrarFechaYHora() {
    const fechaHoraDiv = document.getElementById('fechaHora');
    if (fechaHoraDiv) {
      fechaHoraDiv.innerText = this.obtenerFechaYHoraActual();
    }
  }

  user: any = {}; 
  loading: boolean = true; 
  error: string | null = null;
  is_staff: boolean = false 
  
  getUserLogged(): void {
    this.userService.profile().subscribe(
      (user: any) => {
        this.user = user;
        this.is_staff = user.isstaff
      },
      (error: any) => {
        console.error('Error al obtener el perfil:', error);
        this.error = 'No se pudo obtener la información del perfil.';
        this.loading = false; 
      }
    );
  }
  currentImage = './assets/img/índice.png';

  editarperfilId(id: any){
    this.router.navigate(['perfil/update/perfil',id])
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }

  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
