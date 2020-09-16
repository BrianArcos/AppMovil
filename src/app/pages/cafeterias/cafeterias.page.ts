import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { EstablecimientosService } from '../../services/establecimientos.service';

@Component({
  selector: 'app-cafeterias',
  templateUrl: './cafeterias.page.html',
  styleUrls: ['./cafeterias.page.scss'],
})
export class CafeteriasPage implements OnInit {

  listacafeterias :RespEstablecimientos[] = [];

  constructor( private estableService: EstablecimientosService,
               private route: Router) { }

  ngOnInit() {
    this.estableService.getcafeterias()
    .subscribe(Response => {
      // console.log(Response);
      this.listacafeterias = Response;
    });
  }
  IrAdetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-establecimiento',{datos: JSON.stringify(listado)}])
  }

}
