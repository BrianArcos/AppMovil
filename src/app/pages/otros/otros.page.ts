import { Component, OnInit } from '@angular/core';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Respotros } from '../../interfaces/interfaces';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {

  listaotros: Respotros[] = [];  
  constructor(private otrosservices: EstablecimientosService,
              private modalCtrl: ModalController,
              private route: Router ) { }

  ngOnInit() {
    this.otrosservices.getotros()
    .subscribe(resp=>{
      this.listaotros = resp;
    });
  }

  irADetalle(listaotros: Respotros){
    this.route.navigate(['detalleotros',{datos: JSON.stringify(listaotros)}]);
  }

}
