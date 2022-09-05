import { Component, OnInit } from '@angular/core';
import { Equipo } from '../interfaz/equipo';
import { InfoequipoService } from '../servicios/infoequipo.service';
import { Router } from '@angular/router';
import { SharedService } from '../servicios/shared.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', './info.component2.css']
})
export class InfoComponent implements OnInit {

  id: any;
  url: any;
  arregloEquipos: Equipo[] = [];
  displayedColumns: string[] = ['id', 'nombre'];

  constructor(private infoServicio: InfoequipoService, private router: Router, private servicioCompartido: SharedService) {
    this.infoServicio.obtenerDatosEquipos().subscribe(respuesta => {
      this.arregloEquipos = respuesta as any
    })
    this.servicioCompartido.setId(this.id)
    this.servicioCompartido.setUrl(this.url)
  }

  route(){
    this.router.navigate(['/equipo'], {queryParams: {id: this.id, url: this.url}});
  }

  

  ngOnInit(): void {
    /*this.servicioCompartido.setId(this.id)*/
  }

}
