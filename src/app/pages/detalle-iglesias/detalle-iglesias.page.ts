import { Component, OnInit } from '@angular/core';
import { Respotros } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detalle-iglesias',
  templateUrl: './detalle-iglesias.page.html',
  styleUrls: ['./detalle-iglesias.page.scss'],
})
export class DetalleIglesiasPage implements OnInit {

  lista_I : Respotros;
  oculto = 120;

  constructor(private otrosService: EstablecimientosService,
              private state: ActivatedRoute,
              private navegador: InAppBrowser) { }

  ngOnInit() {
    this.lista_I= JSON.parse(this.state.snapshot.params.datos)
  }

}
