import { Component, OnInit } from '@angular/core';
import { Respotros } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iglesias',
  templateUrl: './iglesias.page.html',
  styleUrls: ['./iglesias.page.scss'],
})
export class IglesiasPage implements OnInit {

  listaiglesias: Respotros[] = [];

  constructor(private otrosService: EstablecimientosService,
              private modalCtrl: ModalController,
              private route: Router) { }

  ngOnInit() {
    this.otrosService.getiglesias()
    .subscribe(resp=> {
      this.listaiglesias = resp;
    });
  }

  irADetalle(listado: Respotros){
    this.route.navigate(['detalle-iglesias',{datos: JSON.stringify(listado)}]);
  }

}
