import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RespEstablecimientos } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { EstablecimientosService } from '../../services/establecimientos.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  
  listarestaurantes :RespEstablecimientos[] = [];
 
  constructor( private estableService:EstablecimientosService,
               private modalCtrl: ModalController,
               private route: Router ) { }
  
  ngOnInit() {
    this.estableService.getrestaurantes()
    .subscribe(resp => {
      this.listarestaurantes = resp;
      //console.log(Response);
    });
  }

  IrAdetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-establecimiento',{datos: JSON.stringify(listado)}])
  }
   

}
