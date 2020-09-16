import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bares',
  templateUrl: './bares.page.html',
  styleUrls: ['./bares.page.scss'],
})
export class BaresPage implements OnInit {

  listabares :RespEstablecimientos[] = [];

  constructor( private estableService:EstablecimientosService,
               private modalCtrl: ModalController,
               private route: Router) { }

  ngOnInit() {
    this.estableService.getbares()
    .subscribe( resp => {
        // console.log('Resp',resp );
        this.listabares = resp;
    });
  }
 
  irADetalle(listado: RespEstablecimientos){
    this.route.navigate(['detalle-establecimiento',{datos: JSON.stringify(listado)}]);
  }

}
