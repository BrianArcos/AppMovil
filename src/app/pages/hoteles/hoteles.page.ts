import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EstablecimientosService } from '../../services/establecimientos.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.page.html',
  styleUrls: ['./hoteles.page.scss'],
})
export class HotelesPage implements OnInit {

   listahoteles :RespEstablecimientos[] = [];

   slideOpts={
     slidesPerView:1.3,
     freeMode: true
   };

  constructor( private estableService: EstablecimientosService,
               private modalCtrl: ModalController,
               private route: Router) {

   }  

  ngOnInit() {
    this.estableService.gethoteles()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.listahoteles = resp;
    });   
      //console.log('hoteles',res);
      //this.hoteles= Response;
    
  }  
  
  irADetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-establecimiento',{datos: JSON.stringify(listado)}]);
  }

} 
