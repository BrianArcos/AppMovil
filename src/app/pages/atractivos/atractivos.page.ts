import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { RespAtractivos } from '../../interfaces/interfaces';

 
@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.page.html',
  styleUrls: ['./atractivos.page.scss'],
})
export class AtractivosPage implements OnInit {

  lista_A :RespAtractivos[] ;

  constructor( private atractivService:EstablecimientosService,
    private modalCtrl: ModalController,
    private route: Router) { }

  ngOnInit() {
    this.atractivService.getatractivos()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.lista_A = resp;
    }); 
    
  }

  irADetalle(listado: RespAtractivos){
    this.route.navigate(['detalle-atractivo',{datos: JSON.stringify(listado)}]);
  }

}

