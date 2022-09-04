import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoequipoService {

  constructor(private http: HttpClient) { }

  obtenerDatosEquipos() {
    return this.http.get('http://localhost:3000/api/equipos')
  }
}
