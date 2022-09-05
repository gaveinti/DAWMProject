import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../servicios/shared.service';
import { InfoJugadorBDNRService } from '../servicios/info-jugador-bdnr.service';
import { JugadorDeEquipo } from '../interfaz/jugador-de-equipo';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  nombre: string | undefined;
  url: string | undefined;

  edad: BigInteger | undefined;
  equipoAnterior: string | undefined;
  fechaNacimiento: Date | undefined;
  idJ: BigInteger | undefined;
  nombreJ: string | undefined;
  numeroDorsal: BigInteger | undefined;

  constructor(private activatedroute: ActivatedRoute, private servicioCompartido: SharedService, private servicioInfoJu: InfoJugadorBDNRService) {
    /*this.activatedroute.queryParams.subscribe(data => {
      console.log(data);
    })
    this.id = this.servicioCompartido.getId()*/


    servicioInfoJu.obtenerDatos().subscribe(respuesta => {

      let arrJugadores = respuesta as JugadorDeEquipo[]
      console.log(arrJugadores)

      let seccion = document.querySelector('#ListaInfoEquipo')
      seccion!.innerHTML = "" 
      

      for(let jugador of arrJugadores){
        let equipo = jugador.equipoAnterior
        if(this.nombre == equipo){
          let edadPresentar = jugador.edad
          let equipoAnteriorPresentar = jugador.equipoAnterior
          let fechaNacimientoPresentar = jugador.fechaNacimiento
          let idPresentar = jugador.id
          let nombrePresentar = jugador.nombre
          let numeroDorsalPresentar = jugador.numeroDorsal

          let plantilla = `
          <mat-card class="cartaFondo">
            <mat-card-title>Información de jugador</mat-card-title>
            <mat-card-subtitle></mat-card-subtitle>
            <p>Edad: ${edadPresentar}</p>
            <p>Equipo: ${equipoAnteriorPresentar}</p>
            <p>Fecha de nacimiento: ${fechaNacimientoPresentar}</p>
            <p>Id de jugador: ${idPresentar}</p>
            <p>Nombre: ${nombrePresentar}</p>
            <p>Dorsal: ${numeroDorsalPresentar}</p>
            <mat-card-actions>
              <button mat-button>LIKE</button>
              <button mat-button>SHARE</button>
            </mat-card-actions>
          </mat-card>
          `
          seccion!.innerHTML += plantilla

          console.log(this.nombre)
        }
      }
    })

  }

  ngOnInit(): void {
    this.nombre = this.activatedroute.snapshot.params['nombre']
    this.url = this.activatedroute.snapshot.params['url']
    if(this.nombre == "Barsa"){
      this.url = "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png"
    }
    else if(this.nombre == "Madrid"){
      this.url = "https://assets.stickpng.com/images/584a9b47b080d7616d298778.png"
    }
    else if(this.nombre == "Milan"){
      this.url = "https://logodownload.org/wp-content/uploads/2016/09/ac-milan-logo-2.png"
    }
    else if(this.nombre == "Bayern Munchen"){
      this.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg/800px-Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg.png"
    }
    else{
      this.url = "https://logodownload.org/wp-content/uploads/2018/04/emelec-logo-escudo-1.png"
    }
    /*this.id = this.servicioCompartido.getId()*/
  }

}
