import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos, RespTransporte } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  listatransporte: RespTransporte[];
  oculto= 120;
  constructor(private transpService: EstablecimientosService,
              private route: Router) { }
    
  ngOnInit() {
    this.transpService.gettransporte()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.listatransporte = resp;
    });
  }

}  
