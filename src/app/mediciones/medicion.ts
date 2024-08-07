import { Time } from "@angular/common";

export class Medicion {
    id_medicion: number;
    temperatura:number;
    humedad: number;
    fecha: Date;
    hora: Time;
    promedio_temperatura:number;
    id_config_parametro: number;
  }
  