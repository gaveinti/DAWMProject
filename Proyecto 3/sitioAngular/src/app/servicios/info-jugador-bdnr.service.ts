import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoJugadorBDNRService {

  constructor(private http: HttpClient) { }

  obtenerDatos(){
    console.log("servicio corriendo")
    return this.http.get('https://guilleproyecto3dawm-default-rtdb.firebaseio.com/collection.json')
  }
}
