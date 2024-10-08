import { Time } from "@angular/common";

export interface Filter {
    id_medicion: number;
    temperatura:number;
    humedad: number;
    fecha: Date;
    hora: Time;
    
    id_config_parametro: number;
    searchTerm: string;
  }
  