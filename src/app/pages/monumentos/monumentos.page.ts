import { Component, OnInit } from '@angular/core';
import { Respmonumentos } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-monumentos',
  templateUrl: './monumentos.page.html',
  styleUrls: ['./monumentos.page.scss'],
})
export class MonumentosPage implements OnInit {

listamonumento: Respmonumentos[] = [];

  constructor(private monumentosService: EstablecimientosService,
              private modalCtrl: ModalController,
              private router:Router) { }

  ngOnInit() {
    this.monumentosService.getmonumentos()
    .subscribe(resp => {
      this.listamonumento = resp;
    });
  }

  irADetalle(listado:Respmonumentos){
    this.router.navigate(['detalle-monumentos',{datos: JSON.stringify(listado)}])
  }

}
