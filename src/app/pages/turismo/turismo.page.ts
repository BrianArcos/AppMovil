import { Component, OnInit } from '@angular/core';
import { RespAtractivos } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {

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
