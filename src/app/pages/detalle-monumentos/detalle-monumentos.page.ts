import { Component, OnInit } from '@angular/core';
import { Respmonumentos } from 'src/app/interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detalle-monumentos',
  templateUrl: './detalle-monumentos.page.html',
  styleUrls: ['./detalle-monumentos.page.scss'],
})
export class DetalleMonumentosPage implements OnInit {

  lista_M : Respmonumentos;
  oculto = 120;

  constructor(private monumentosServices : EstablecimientosService,
              private state : ActivatedRoute,
              private navegador : InAppBrowser) { }

  ngOnInit() {
    this.lista_M = JSON.parse(this.state.snapshot.params.datos)
  }

}
