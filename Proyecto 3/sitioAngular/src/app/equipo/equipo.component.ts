import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../servicios/shared.service';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  id: string | undefined;

  constructor(private activatedroute: ActivatedRoute, private servicioCompartido: SharedService) {
    /*this.activatedroute.queryParams.subscribe(data => {
      console.log(data);
    })
    this.id = this.servicioCompartido.getId()*/

  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id']
    /*this.id = this.servicioCompartido.getId()*/
  }

}
