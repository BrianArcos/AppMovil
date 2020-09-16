import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { EstablecimientosService } from '../../services/establecimientos.service';


@Component({
  selector: 'app-hostales',
  templateUrl: './hostales.page.html',
  styleUrls: ['./hostales.page.scss'],
})
export class HostalesPage implements OnInit {

  listahostales : RespEstablecimientos[]

  constructor( private estableService: EstablecimientosService,
               private route: Router) { 

  }

  ngOnInit() {
    this.estableService.gethostales()
    .subscribe(Response => {
      //console.log('hoteles',Response);
      this.listahostales =Response;
    });
  }

  irADetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-establecimiento',{datos: JSON.stringify(listado)}])
  }
  
}
