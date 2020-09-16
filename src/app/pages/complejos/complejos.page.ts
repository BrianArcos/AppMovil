import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { RespEstablecimientos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-complejos',
  templateUrl: './complejos.page.html',
  styleUrls: ['./complejos.page.scss'],
})
export class ComplejosPage implements OnInit {

  lista_A :RespEstablecimientos[] ;

  constructor( private complejosService:EstablecimientosService,
    private modalCtrl: ModalController,
    private route: Router) { }

  ngOnInit() {
    this.complejosService.getcomplejos()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.lista_A = resp;
    }); 
    
  }

  irADetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-atractivo',{datos: JSON.stringify(listado)}]);
  }


}
