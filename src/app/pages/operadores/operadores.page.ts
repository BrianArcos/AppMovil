import { Component, OnInit } from '@angular/core';
import { RespOperadores } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.page.html',
  styleUrls: ['./operadores.page.scss'],
})
export class OperadoresPage implements OnInit {

  listaopera: RespOperadores[];

  constructor( private operaService: EstablecimientosService,
               private route: Router) { }

  ngOnInit() {
    this.operaService.getoperadores()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.listaopera = resp;
    });
  }

  irADetalle(listado: RespOperadores){
    this.route.navigate(['detalle-operador',{datos: JSON.stringify(listado)}]);
  }

}
