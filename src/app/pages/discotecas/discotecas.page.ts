import { Component, OnInit } from '@angular/core';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RespEstablecimientos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-discotecas',
  templateUrl: './discotecas.page.html',
  styleUrls: ['./discotecas.page.scss'],
})
export class DiscotecasPage implements OnInit {

  listadiscotecas :RespEstablecimientos[] = [];

  constructor(  private estableService:EstablecimientosService,
    private modalCtrl: ModalController,
    private route: Router) { }

  ngOnInit() {
    this.estableService.getdiscotecas()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.listadiscotecas = resp;
    }); 
  }  

  irADetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-establecimiento',{datos: JSON.stringify(listado)}]);
  }
}
